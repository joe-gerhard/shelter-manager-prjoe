import React, { Dispatch } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Styled from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { UIActions } from '../../redux/actions/UIActions'
import { AppState } from '../../redux/reducers/rootReducter'

const SortDropdown = () => {

    const { sortAscending, sortType } = useSelector((state: AppState) => state.UI)
    const { pets } = useSelector((state: AppState) => state.Pets)

    const uiDispatch = useDispatch<Dispatch<UIActions>>()
    
    const handleSetSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        uiDispatch({type: 'SET_SORT_TYPE', payload: e.target.value })
    }

    const handleSetSortAscending = () => {
        uiDispatch({type: 'SET_SORT_ASCENDING', payload: !sortAscending})
    }

    const sortPets = () => {
        pets.sort((a, b) => {
            switch(sortType) {
                case 'age':
                    return a.age - b.age
                case 'daysInShelter':
                    return a.daysInShelter - b.daysInShelter
                case 'adorableness':
                    return a.adorableness - b.adorableness
                default:
                    return 0;
            }
        })
    
        if(sortAscending) pets.reverse()
        console.log('sorting')
    }

    sortPets();

    return (
        <Styled.SortDropdown>
                <label htmlFor="sort">Sort:</label>
                {/* TODO: implement my own select component so I can have total control over the style */}
                <select name="sort" id="sort" onChange={handleSetSortType} value={sortType}>
                    <option value="age">Age</option>
                    <option value="daysInShelter">Days in shelter</option>
                    <option value="adorableness">Adorableness</option>
                </select>                
                <FontAwesomeIcon onClick={handleSetSortAscending} icon={sortAscending ? faCaretDown : faCaretUp} />
        </Styled.SortDropdown>
    )
}

export default SortDropdown
