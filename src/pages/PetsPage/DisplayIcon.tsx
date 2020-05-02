import React from 'react'
import Styled from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type DisplayIconProps = {
    icon: IconDefinition;
    selected: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DisplayIcon = ({ icon, selected, onClick }: DisplayIconProps) => {
    return (
        <Styled.DisplayIcon onClick={onClick} selected={selected}>
            <FontAwesomeIcon icon={icon} />
        </Styled.DisplayIcon>
    )
}

export default DisplayIcon
