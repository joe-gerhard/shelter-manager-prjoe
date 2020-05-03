export interface ISetDisplayTypeAction {
    readonly type: 'SET_DISPLAY_TYPE';
    payload: 'card' | 'row';
}

export type UIActions = 
| ISetDisplayTypeAction
