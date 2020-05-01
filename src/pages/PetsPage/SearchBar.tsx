import React from 'react'
import Styled from './styles'

const SearchBar = () => {
    return (
        <Styled.SearchBar>
            <div>
                <label htmlFor="search">Search</label>
                <input id="search" type="text"/>
                <label htmlFor="sort">Sort</label>
                <select name="sort" id="sort">
                    <option value="age">Age</option>
                    <option value="days in shelter">Days in shelter</option>
                    <option value="adorableness">Adorableness</option>
                </select>
                <span>V</span>
            </div>
            <div>
                <span>IconView</span>
                <span>ListView</span>
            </div>
        </Styled.SearchBar>
    )
}

export default SearchBar
