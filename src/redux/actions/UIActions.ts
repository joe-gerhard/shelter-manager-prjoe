export interface ISetDisplayTypeAction {
    readonly type: 'SET_DISPLAY_TYPE';
    payload: 'card' | 'row';
}

export interface ISetSortTypeAction {
    readonly type: 'SET_SORT_TYPE';
    payload: string;
}

export interface ISetSortAscending {
    readonly type: 'SET_SORT_ASCENDING';
    payload: boolean;
}
export type UIActions = 
| ISetDisplayTypeAction
| ISetSortTypeAction
| ISetSortAscending
