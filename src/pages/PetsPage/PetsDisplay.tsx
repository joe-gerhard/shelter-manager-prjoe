import React, { Dispatch } from 'react'
import Styled from './styles'
import PetCard from './PetCard'
import PetRow from './PetRow'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducter'
import { useHistory } from 'react-router-dom'
import { PetsActions } from '../../redux/actions/PetsActions'
import { Pet } from './types'



const PetsDisplay = () => {

    const { displayType } = useSelector((state: AppState) => state.UI)
    const { pets } = useSelector((state: AppState) => state.Pets)
    const history = useHistory()
    const petsDispatch = useDispatch<Dispatch<PetsActions>>();

    const handleShowPetPage = (pet: Pet) => {
        petsDispatch({type: 'SET_SELECTED_PET', payload: pet})
        history.push('/pet')
    }



    return (
        <Styled.PetsDisplay displayType={displayType}>
            {displayType === "card" 
            ? pets.map((pet, idx) => <PetCard onClick={() => handleShowPetPage(pet)} key={idx} pet={pet} />)
            : null }
            {displayType === "row"
            ? <> 
            <PetRow pet={'header'}/>
            {pets.map((pet, idx) => <PetRow onClick={() => handleShowPetPage(pet)} key={idx} pet={pet} />)}
            </>
            : null }
            
        </Styled.PetsDisplay>
    )
}

export default PetsDisplay
