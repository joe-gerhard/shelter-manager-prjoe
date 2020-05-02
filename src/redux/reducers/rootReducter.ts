import { combineReducers } from 'redux'
import UIReducer from '../reducers/UIReducer'

const rootReducer = combineReducers({
    UI: UIReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
