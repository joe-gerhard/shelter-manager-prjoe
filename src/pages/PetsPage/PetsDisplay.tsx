import React, { useState, useEffect } from 'react'
import Styled from './styles'
import PetCard from './PetCard'
import PetRow from './PetRow'
import { db } from '../../util/firebase'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducter'

export type Pet = {
    name: string;
    species: string;
    breed: string;
    age: number;
    daysInShelter: number;
    adorableness: number;
    imageUrl: string;
}

const PetsDisplay = () => {

    const { displayType } = useSelector((state: AppState) => state.UI)
    const [ pets, setPets ] = useState<Pet[]>([]);

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
                }
                console.log(petArr)
                petArr.push(pet);
            })

            setPets(petArr);
        })
    },[])

    return (
        <Styled.PetsDisplay displayType={displayType}>
            {displayType === "card" 
            ? pets.map((pet, idx) => <PetCard key={idx} pet={pet} />)
            : null }
            {displayType === "row"
            ? <> 
            <PetRow pet={'header'}/>
            {pets.map((pet, idx) => <PetRow key={idx} pet={pet} />)}
            </>
            : null }
            
        </Styled.PetsDisplay>
    )
}

export default PetsDisplay
