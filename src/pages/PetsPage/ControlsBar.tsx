import React from 'react'
import Styled from './styles'
import SearchInput from './SearchInput'
import SortDropdown from './SortDropdown'
import DisplaySelector from './DisplaySelector'

const ControlsBar = () => {
    return (
        <Styled.ControlsBar>
            <div>            
                <SearchInput />
                <SortDropdown />      
            </div>
            <DisplaySelector />
           
        </Styled.ControlsBar>
    )
}

export default ControlsBar
