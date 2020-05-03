import { combineReducers } from 'redux'
import UIReducer from '../reducers/UIReducer'
import PetReducer from './PetsReducer';

const rootReducer = combineReducers({
    UI: UIReducer,
    Pets: PetReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
