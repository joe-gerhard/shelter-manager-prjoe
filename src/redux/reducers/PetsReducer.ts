import { PetsActions } from "../actions/PetsActions";
import { Reducer } from "redux";
import { Pet } from "../../pages/PetsPage/types";

type PetState = {
    pets: Pet[];
    selectedPet: Pet | null;
}

const initialState: PetState = {
    pets: [],
    selectedPet: null,
}

const PetReducer: Reducer<PetState, PetsActions> = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SELECTED_PET':
            return {
                ...state,
                selectedPet: action.payload,
            }
        case 'SET_PETS':
            return {
                ...state,
                pets: action.payload,
            }
        default:
            return state;
    }
}

export default PetReducer;
