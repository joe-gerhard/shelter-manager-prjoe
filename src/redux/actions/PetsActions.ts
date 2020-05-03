import { Pet } from "../../pages/PetsPage/PetsDisplay";

export interface ISetSelectedPetAction {
    readonly type: 'SET_SELECTED_PET';
    payload: Pet;
}

export type PetsActions = 
| ISetSelectedPetAction
