import styled, { css } from 'styled-components';
import { Theme } from './theme';


type PageProps = {
    theme: Theme;
}

export const Page = styled.main(({ theme }: PageProps) => css`
    height: 100%;
    width: 100%;
    padding: 20px;
    background: ${theme.light};
    color: ${theme.dark};
    display: flex; 
    flex-direction: column;
    align-items: center;
`);
