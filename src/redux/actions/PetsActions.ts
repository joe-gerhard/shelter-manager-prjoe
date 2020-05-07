import { Pet } from "../../pages/PetsPage/types";

export interface ISetSelectedPetAction {
    readonly type: 'SET_SELECTED_PET';
    payload: Pet;
}

export interface ISetPets { 
    readonly type: 'SET_PETS';
    payload: Pet[];
}

export type PetsActions = 
| ISetSelectedPetAction
| ISetPets
