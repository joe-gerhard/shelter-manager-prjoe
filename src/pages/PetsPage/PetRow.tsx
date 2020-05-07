import React from 'react'
import Styled from './styles'
import { Pet } from './types'

type PetRowProps = {
    pet: Pet | 'header';
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
}

const PetRow = ({ pet, onClick }: PetRowProps) => {
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
            <Styled.PetRow onClick={onClick}>
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
