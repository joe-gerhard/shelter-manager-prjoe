import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

type NavbarProps = {
    theme: Theme;
    active?: string;
}

const Navbar = styled.nav(({ theme }: NavbarProps) => css`
    height: 80px;
    background: ${theme.primary};
    color: ${theme.dark};
    display: flex; 
    align-items: center;
`);

const Logo = styled(Link)(({ theme }: NavbarProps) => css`
    font-size: 36px;
    color: ${theme.light};
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
`)

const StyledLink = styled(Link)(({ theme, active }: NavbarProps) => css`
    font-size: 20px;
    color: ${active ? theme.primary : theme.light};
    text-decoration: none;
    height: 100%;
    background: ${active ? theme.light : theme.primary};
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    border-left: 2px solid ${theme.light};

    &:hover {
        background: ${theme.light};
        color: ${theme.primary};
    }

    &:last-child {
        border-right: 2px solid ${theme.light};
    }
`)

export default { 
    Navbar,
    Logo,
    Link: StyledLink,
}