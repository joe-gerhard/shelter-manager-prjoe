import React, { useEffect, Dispatch } from 'react'
import Styled from './styles'
import AddPetForm from './AddPetForm'
import ControlsBar from './ControlsBar'
import PetsDisplay from './PetsDisplay'
import { Pet } from './types'
import { db } from '../../util/firebase'
import { useDispatch } from 'react-redux'
import { PetsActions } from '../../redux/actions/PetsActions'

const PetsPage = () => {

    const petsDispatch = useDispatch<Dispatch<PetsActions>>();

    useEffect(() => {
        
        let petArr: Pet[] = []

        db.collection('pets').get({})
        .then(response => {

            response.forEach(result => {

                const data = result.data()

                let pet: Pet = {
                    name: data.name,
                    species: data.species,
                    breed: data.breed,
                    age: data.age,
                    daysInShelter: data.daysInShelter,
                    adorableness: data.adorableness,
                    imageUrl: data.imageUrl,
                    id: result.id,
                }
                petArr.push(pet);
            })

            petsDispatch({type: 'SET_PETS', payload: petArr})
        })
    },[petsDispatch])

    return (
        <Styled.PetsPage>
            <AddPetForm />
            <ControlsBar />
            <PetsDisplay />
        </Styled.PetsPage>
    )
}

export default PetsPage
