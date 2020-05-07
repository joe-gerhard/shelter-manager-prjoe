import React from 'react'
import Styled from './styles'
import { Pet } from './types'

type PetCardProps = {
    pet: Pet;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}

const PetCard = ({ pet, onClick }: PetCardProps) => {
    return (
        <Styled.PetCard onClick={onClick}>
            <div>
                {pet.name}
            </div>
            <img src={pet.imageUrl} alt={pet.name} />
        </Styled.PetCard>
    )
}

export default PetCard
