import {ActionType} from '../action-types/index';

export const isAuthenticating = (bool: boolean = true) => (<const>{
    type: ActionType.SET_AUTH_LOADING,
    payload: bool
});

export type LoadingActionType = 
    | ReturnType<typeof isAuthenticating>;