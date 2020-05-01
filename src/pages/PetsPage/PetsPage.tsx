import React from 'react'
import Styled from './styles'
import AddPetForm from './AddPetForm'
import SearchBar from './SearchBar'
import PetsDisplay from './PetsDisplay'

const PetsPage = () => {
    return (
        <Styled.PetsPage>
            <AddPetForm />
            <SearchBar />
            <PetsDisplay />
        </Styled.PetsPage>
    )
}

export default PetsPage
