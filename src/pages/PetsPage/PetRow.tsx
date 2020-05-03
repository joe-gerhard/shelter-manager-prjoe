import React from 'react'
import { Pet } from './PetsDisplay'
import Styled from './styles'

type PetRowProps = {
    pet: Pet | 'header';
}

const PetRow = ({ pet }: PetRowProps) => {
    if(pet === 'header') {
        return (
            <Styled.PetRow header>
                <span>Name</span>
                <span>Species</span>
                <span>Breed</span>
                <span>Age</span>
                <span>Days In Shelter</span>
                <span>Adorableness</span>
            </Styled.PetRow>
        )
    } else {
        return (
            <Styled.PetRow>
                <span>{pet.name}</span>
                <span>{pet.species}</span>
                <span>{pet.breed}</span>
                <span>{pet.age}</span>
                <span>{pet.daysInShelter}</span>
                <span>{pet.adorableness}</span>
            </Styled.PetRow>
        )
    }
}

export default PetRow
