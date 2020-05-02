export interface ISetDisplayTypeAction {
    readonly type: 'SET_DISPLAY_TYPE';
    payload: string;
}

export type UIActions = 
| ISetDisplayTypeAction
