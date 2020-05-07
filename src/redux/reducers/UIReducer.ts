import { UIActions } from "../actions/UIActions";
import { Reducer } from "redux";

type UIState = {
    displayType: 'card' | 'row';
    sortType: string;
    sortAscending: boolean;
}

const initialState: UIState = {
    displayType: 'card',
    sortType: 'age',
    sortAscending: true,
}

const UIReducer: Reducer<UIState, UIActions> = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DISPLAY_TYPE':
            return {
                ...state,
                displayType: action.payload,
            }
        case 'SET_SORT_TYPE':
            return {
                ...state,
                sortType: action.payload,
            }
        case 'SET_SORT_ASCENDING':
            return {
                ...state,
                sortAscending: action.payload,
            }
        default:
            return state;
    }
}

export default UIReducer;
