import { IRegister, IUser } from '../../types/types';
import { ActionType } from '../action-types';

export const loginStart = (username: string, password: string) => (<const>{
    type: ActionType.LOGIN_START,
    payload: {
        username,
        password
    }
});

export const loginSuccess = (auth: IUser) => (<const>{
    type: ActionType.LOGIN_SUCCESS,
    payload: auth
});

export const logoutStart = (callback?: () => void) => (<const>{
    type: ActionType.LOGOUT_START,
    payload: { callback }
});

export const logoutSuccess = () => (<const>{
    type: ActionType.LOGOUT_SUCCESS
});

export const registerStart = ({ first_name, last_name, nickname, password, username }: IRegister) => (<const>{
    type: ActionType.REGISTER_START,
    payload: {
        first_name,
        last_name,
        nickname,
        password,
        username
    }
});

export const registerSuccess = (userAuth: IUser) => (<const>{
    type: ActionType.REGISTER_SUCCESS,
    payload: userAuth
});

export const checkSess = () => (<const>{
    type: ActionType.CHECK_SESSION
});

export type AuthActionType = 
    | ReturnType<typeof checkSess>
    | ReturnType<typeof registerSuccess>
    | ReturnType<typeof registerStart>
    | ReturnType<typeof logoutSuccess>
    | ReturnType<typeof logoutStart>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginStart>