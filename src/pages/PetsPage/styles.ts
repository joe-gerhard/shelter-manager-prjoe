import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Page } from '../../styles';

type PetsPageProps = {
    theme: Theme;
    active?: string;
    open?: boolean;
    selected?: boolean;
}

const PetsPage = styled(Page)(({ theme }: PetsPageProps) => css`
    padding: 0;
`);

const AddPetForm = styled.div(({ theme, open }: PetsPageProps) => css`
    border-bottom: 2px solid ${theme.primary};
    width: 100%;
    min-height: ${open ? "100%" : "80px"};
    height: ${open ? "100%" : "80px"};
    transition: all .5s;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: ${open ? "scroll" : "hidden"};
`);

const Button = styled.button(({ theme, open }:PetsPageProps) => css`
    background: ${open ? theme.light : theme.secondary};
    color: ${open ? theme.secondary : theme.light};
    font-size: 16px;
    height: 40px;
    min-height: 40px;
    width: 160px;
    padding: 5px;
    border: 1px solid ${theme.secondary};
    border-radius: 3px;
    transition: background, color .5s;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`)

const SubmitButton = styled(Button)(({ theme, open}) => css`
    visibility: ${open ? "show" : "hidden"};
    background: ${theme.secondary};
    color: ${theme.light};
    margin-left: 20px; 
    opacity: ${open ? 1 : 0};
    transition: opacity ${open ? '.5s .5s' : '0s'};
    
`)

const Input = styled.input(({ theme, open }: PetsPageProps) => css`
    opacity: ${open ? 1 : 0};
    width: 400px;
    font-size: 16px;
    height: 40px;
    min-height: 40px;
    margin-top: 20px;
    padding: 0 20px;
    border: 1px solid ${theme.lightGrey};
    border-radius: 3px;
    transition: opacity ${open ? '.5s .5s' : 0};

    &:focus {
        border: 1px solid ${theme.primary};
        outline: none;
        box-shadow: 0 0 5px ${theme.primary};
    }
`)

const ControlsBar = styled.div(({ theme }:PetsPageProps) => css`
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    div {
        display: flex;        
    }

`)

const PetsDisplay = styled.div(({ theme }: PetsPageProps) => css`
    width: 100%;
    display: flex;
    padding: 0 20px;
`)

const PetCard = styled.div(({ theme }: PetsPageProps) => css`
    height: 300px;
    width: 300px;
    margin: 20px;
    box-shadow: 0 5px 10px ${theme.lightGrey};
    border-radius: 10px;
    overflow: hidden;

    div {
        min-height: 40px;
        font-size: 20px;
        color: ${theme.lightGrey};
        display: flex;
        padding: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`)

const SearchInput = styled.div(({ theme }: PetsPageProps) => css`
    display: flex;
    align-items: center;
    border: 2px solid ${theme.primary};
    border-radius: 3px;
    height: 40px;
    color: ${theme.dark};

    button {
        height: 100%;
        width: 40px;
        font-size: 20px;
        border: none;
        color: ${theme.light};
        background: ${theme.primary};

        &:hover {
            cursor: pointer;
        }

        &:focus {
            outline: none;
            background: ${theme.light};
            color: ${theme.primary};
        }
    }

    input {
        font-size: 18px;
        color: ${theme.dark};
        border: none;
        border-left: 2px solid ${theme.primary};
        height: 100%;
        padding: 0 10px;
        caret-color: ${theme.dark};

        &:focus {
            outline: none;
        }
    }
`)

const SortDropdown = styled.div(({ theme }: PetsPageProps) => css`
    display: flex;
    align-items: center;
    margin-left: 50px;
    font-size: 18px;

    select {
        margin: 0 5px;
    }
`)

const DisplaySelector = styled.div(({ theme }: PetsPageProps) => css`
    height: 40px;
    display: flex;
    align-items: center;
`)

const DisplayIcon = styled.button(({ theme, selected }: PetsPageProps) => css`
    border: 2px solid ${selected ? theme.primary : 'transparent'};
    background: none;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    font-size: 20px;
    color: ${theme.primary};

    &:focus {
        outline: none;
    }
`)

export default { 
    PetsPage,
    AddPetForm,
    Button,
    SubmitButton,
    Input,
    ControlsBar,
    PetsDisplay,
    PetCard,
    SearchInput,
    SortDropdown,
    DisplaySelector,
    DisplayIcon,
}