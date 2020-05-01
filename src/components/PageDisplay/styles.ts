import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type PageDisplayProps = {
    theme: Theme;
}

const PageDisplay = styled.nav(({ theme }: PageDisplayProps) => css`
    height: calc(100vh - 80px);
    background: ${theme.light};
    color: ${theme.dark};
    display: flex; 
`);

export default { 
    PageDisplay,
}