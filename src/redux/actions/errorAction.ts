import { ActionType } from '../action-types/index';
import { IError } from '../../types/types';

export const setAuthError = (error: IError | null) => (<const>{
    type: ActionType.SET_AUTH_ERR,
    payload: error
});

export const clearAuthError = () => (<const>{
    type:ActionType.CLEAR_AUTH_ERR
});

export type ErrorActionType =
    | ReturnType<typeof setAuthError>
    | ReturnType<typeof clearAuthError>;