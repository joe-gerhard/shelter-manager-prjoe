import React from 'react'
import Styled from './styles'
import AddPetForm from './AddPetForm'
import ControlsBar from './ControlsBar'
import PetsDisplay from './PetsDisplay'

const PetsPage = () => {
    return (
        <Styled.PetsPage>
            <AddPetForm />
            <ControlsBar />
            <PetsDisplay />
        </Styled.PetsPage>
    )
}

export default PetsPage
