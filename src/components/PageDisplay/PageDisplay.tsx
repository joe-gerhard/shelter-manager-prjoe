import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PetsPage from '../../pages/PetsPage'
import LandingPage from '../../pages/LandingPage'
import PetOwnersPage from '../../pages/PetOwnersPage'
import Styled from './styles'
import ShowPetPage from '../../pages/ShowPetPage'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducter'

const PageDisplay = () => {
    const { selectedPet } = useSelector((state: AppState) => state.Pets)

    return (
        <Styled.PageDisplay>            
            <Switch>
                {selectedPet && <Route path="/pet" component={ShowPetPage} />}
                <Route path="/pets" component={PetsPage} />
                <Route path="/petowners" component={PetOwnersPage} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Styled.PageDisplay>
    )
}

export default PageDisplay
