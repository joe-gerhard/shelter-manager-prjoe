import React, { Dispatch } from 'react'
import { faAlignJustify, faThLarge } from '@fortawesome/free-solid-svg-icons'
import Styled from './styles'
import DisplayIcon from './DisplayIcon'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducter'
import { UIActions } from '../../redux/actions/UIActions'

const DisplaySelector = () => {

    const { displayType } = useSelector((state: AppState) => state.UI)
    const UIDispatch = useDispatch<Dispatch<UIActions>>();

    const setDisplayType = (type: 'card' | 'row') => {
        UIDispatch({type: 'SET_DISPLAY_TYPE', payload: type})
    }

    return (
        <Styled.DisplaySelector>
            <DisplayIcon onClick={() => setDisplayType('card')} selected={displayType === 'card'} icon={faThLarge} />
            <DisplayIcon onClick={() => setDisplayType('row')} selected={displayType === 'row'} icon={faAlignJustify} />
        </Styled.DisplaySelector>
    )
}

export default DisplaySelector
