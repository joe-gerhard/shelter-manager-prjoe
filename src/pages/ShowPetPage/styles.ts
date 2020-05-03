import styled, { css } from 'styled-components'
import { Theme } from '../../styles/theme'
import { Page } from '../../styles'

type ShowPetPageProps = {
    theme: Theme;
}

const ShowPetPage = styled(Page)(({ theme }: ShowPetPageProps) => css`

`)

const DetailsContainer = styled.div(({ theme }: ShowPetPageProps) => css`
    display: flex;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 10px ${theme.darkGrey};

    img {
        width: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 20px;
    }
`)

export default {
    ShowPetPage,
    DetailsContainer,
}