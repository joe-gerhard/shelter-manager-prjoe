import React from 'react'
import Styled from './styles'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducter'
import { Redirect, useHistory } from 'react-router-dom'

const ShowPetPage = () => {
    const { selectedPet } = useSelector((state: AppState) => state.Pets)
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }
    
    if(selectedPet != null) {
        return (
            <Styled.ShowPetPage>
                <Styled.DetailsContainer>
                    <img onClick={handleGoBack} src={selectedPet.imageUrl} alt={selectedPet.name}/>
                    <div>
                        <h1>{selectedPet.name}</h1>
                        <span>Species: {selectedPet.species}</span>
                        <span>Breed: {selectedPet.breed}</span>
                        <span>Age: {selectedPet.age}</span>
                        <span>Days In Shelter: {selectedPet.daysInShelter}</span>
                        <span>Adorableness: {selectedPet.adorableness}</span>
                    </div>
                </Styled.DetailsContainer>
            </Styled.ShowPetPage>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
}

export default ShowPetPage
