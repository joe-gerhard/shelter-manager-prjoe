import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Styled from './styles'

const SortDropdown = () => {

    const [ sortAscending, setSortAscending ] = useState<boolean>(true);
    
    return (
        <Styled.SortDropdown>
                <label htmlFor="sort">Sort:</label>
                {/* TODO: implement my own select component so I can have total control over the style */}
                <select name="sort" id="sort">
                    <option value="age">Age</option>
                    <option value="days in shelter">Days in shelter</option>
                    <option value="adorableness">Adorableness</option>
                </select>                
                <FontAwesomeIcon onClick={() => setSortAscending(!sortAscending)} icon={sortAscending ? faCaretDown : faCaretUp} />
        </Styled.SortDropdown>
    )
}

export default SortDropdown
