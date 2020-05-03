import { UIActions } from "../actions/UIActions";
import { Reducer } from "redux";

type UIState = {
    displayType: 'card' | 'row';
}

const initialState: UIState = {
    displayType: 'card',
}

const UIReducer: Reducer<UIState, UIActions> = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DISPLAY_TYPE':
            return {
                ...state,
                displayType: action.payload,
            }
        default:
            return state;
    }
}

export default UIReducer;
