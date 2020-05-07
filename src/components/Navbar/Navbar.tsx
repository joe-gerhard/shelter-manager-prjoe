import React from 'react'
import Styled from './styles';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();
    
    
    return (
        <Styled.Navbar>
           <Styled.Logo to="/">ShelterManager.PRjOe</Styled.Logo>
           {/* using a silly workaround to deal with known issue with booleans in styled-components */}
           <Styled.Link active={history.location.pathname === "/pets" ? "true" : undefined} to="/pets">Pets</Styled.Link>
           <Styled.Link active={history.location.pathname === "/petowners" ? "true" : undefined} to="/petowners">Pet Owners</Styled.Link>
           <Styled.Link active={history.location.pathname === "/social" ? "true" : undefined} to="/social">Social</Styled.Link>
        </Styled.Navbar>
    )
}

export default Navbar
