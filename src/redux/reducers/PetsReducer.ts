import { PetsActions } from "../actions/PetsActions";
import { Reducer } from "redux";
import { Pet } from "../../pages/PetsPage/PetsDisplay";

type PetState = {
    selectedPet: Pet | null;
}

const initialState: PetState = {
    selectedPet: null,
}

const PetReducer: Reducer<PetState, PetsActions> = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SELECTED_PET':
            return {
                ...state,
                selectedPet: action.payload,
            }
        default:
            return state;
    }
}

export default PetReducer;
