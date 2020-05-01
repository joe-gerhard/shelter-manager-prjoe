import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Page } from '../../styles';

type LandingPageProps = {
    theme: Theme;
    active?: string;
}

const LandingPage = styled(Page)(({ theme }: LandingPageProps) => css`
 
`);

export default { 
    LandingPage,
}