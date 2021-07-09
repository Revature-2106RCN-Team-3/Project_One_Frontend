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

// export const loginStart = (username: string, password: string) => (<const>{
//     type: ActionType.LOGIN_START,
//     payload: {
//         username,
//         password
//     }
// });

// export const loginSuccess = (auth: IUser) => (<const>{
//     type: ActionType.LOGIN_SUCCESS,
//     payload: auth
// });

// export const logoutStart = (callback?: () => void) => (<const>{
//     type: ActionType.LOGOUT_START,
//     payload: { callback }
// });

// export const logoutSuccess = () => (<const>{
//     type: ActionType.LOGOUT_SUCCESS
// });

// export const registerStart = ({ first_name, last_name, nickname, password, username }: IRegister) => (<const>{
//     type: ActionType.REGISTER_START,
//     payload: {
//         first_name,
//         last_name,
//         nickname,
//         password,
//         username
//     }
// });

// export const registerSuccess = (userAuth: IUser) => (<const>{
//     type: ActionType.REGISTER_SUCCESS,
//     payload: userAuth
// });

// export const checkSess = () => (<const>{
//     type: ActionType.CHECK_SESSION
// });

export type AuthActionType = 
    | ReturnType<typeof isError>
    | ReturnType<typeof isDisabled>
    | ReturnType<typeof loginPassword>
    | ReturnType<typeof loginFailed>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginUsername>