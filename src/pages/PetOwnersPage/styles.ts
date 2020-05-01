import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Page } from '../../styles';

type PetOwnersPageProps = {
    theme: Theme;
    active?: string;
}

const PetOwnersPage = styled(Page)(({ theme }: PetOwnersPageProps) => css`
 
`);

export default { 
    PetOwnersPage,
}