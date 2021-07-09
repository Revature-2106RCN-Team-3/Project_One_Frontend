import { IRegister, ILogin } from '../../types/types';
import { ActionType } from '../action-types';

export const loginUsername = (username: string) => (<const>{
    type: ActionType.SET_USERNAME,
    payload: username
});

export const loginPassword = (password: string) => (<const>{
    type: ActionType.SET_PASSWORD,
    payload: password
});

export const isDisabled = (isDisabled: boolean) => (<const>{
    type: ActionType.SET_IS_DISABLED,
    payload: isDisabled
});

export const loginSuccess = (loginSuccess: string) => (<const>{
    type: ActionType.LOGIN_SUCCESS,
    payload: loginSuccess
});

export const loginFailed = (loginFailed: string) => (<const>{
    type: ActionType.LOGIN_FAILED,
    payload: loginFailed
});

export const isError = (isError: boolean) => (<const>{
    type: ActionType.SET_IS_ERROR,
    payload: isError
});

export const logoutStart = (logout: string) => (<const>{
    type: ActionType.LOGOUT_START,
    payload: logout
});


export type AuthActionType = 
    | ReturnType<typeof isError>
    | ReturnType<typeof isDisabled>
    | ReturnType<typeof loginPassword>
    | ReturnType<typeof loginFailed>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginUsername>
    | ReturnType<typeof logoutStart>;