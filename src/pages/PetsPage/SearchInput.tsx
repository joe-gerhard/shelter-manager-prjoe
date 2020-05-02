import React from 'react'
import Styled from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchInput = () => {

    const handleSearch = () => {
        // TODO: handle search logic here
    }

    return (
        <Styled.SearchInput>            
            <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input id="search" type="text"/>            
        </Styled.SearchInput>
    )
}

export default SearchInput
