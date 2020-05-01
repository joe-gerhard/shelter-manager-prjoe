import React from 'react'
import Styled from './styles'
import { Pet } from './PetsDisplay'

type PetCardProps = {
    pet: Pet
}

const PetCard = ({ pet }: PetCardProps) => {
    return (
        <Styled.PetCard>
            <div>
                {pet.name}
            </div>
            <img src={pet.imageUrl} alt={pet.name} />
        </Styled.PetCard>
    )
}

export default PetCard
