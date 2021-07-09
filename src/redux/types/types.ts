import { ActionType } from "../action-types";

export interface IUser {
  username: string;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface SignUp {
  username: string;
  password: string;
}

export interface ILogin {
    username: IUser | null;
    authenticated: boolean;
    loading: false;
    isError: boolean;
}

export interface SetUser {
  type: typeof ActionType.SET_USERNAME;
  payload: IUser;
}

export interface SetLoading {
  type: typeof ActionType.SET_LOADING;
  payload: boolean;
}

export interface Logout {
  type: typeof ActionType.LOGOUT_START;
}

export interface SetError {
  type: typeof ActionType.IS_ERROR;
  payload: string;
}

export type Authenticate = 
  | SetUser
  | SetLoading
  | Logout
  | SetError;
