import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PetsPage from '../../pages/PetsPage'
import LandingPage from '../../pages/LandingPage'
import PetOwnersPage from '../../pages/PetOwnersPage'
import Styled from './styles'

const PageDisplay = () => {
    return (
        <Styled.PageDisplay>            
            <Switch>
                <Route path="/pets" component={PetsPage} />
                <Route path="/petowners" component={PetOwnersPage} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Styled.PageDisplay>
    )
}

export default PageDisplay
