import { ThunkAction } from 'redux-thunk';
import { RootStore } from '../store';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { ActionType } from '../action-types';
import { SignUp, Authenticate, IUser, Login, UserDispatch } from '../types/types';
import axios from 'axios';
import { Dispatch } from 'react';

const apiURL = 'localhost:3000';

export const CreateUser = (user: {}) => async(dispatch: Dispatch<UserDispatch>) => {
    try {
        dispatch({
            type: ActionType.USER_LOADING
        })

        await axios.post(`${apiURL}/username`, user)
        .then( function (res) {
            dispatch({
                type: ActionType.USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    } catch (err) {
        dispatch({
            type: ActionType.USER_FAIL
        })
    }
}

export const setLoading = (
    value: boolean
) : ThunkAction<void, RootStore, null, Authenticate> => {
    return (dispatch) => {
        dispatch({ 
            type: ActionType.SET_LOADING,
            payload: value
        })
    }
}


export const login = (
    data: Login,
    onError: () => void
) : ThunkAction<void, RootStore, null, Authenticate> => {
    return async (dispatch) => {
        try {
            const res: CognitoUser = await Auth.signIn(data.username, data.password);
            if(res) {
                const userData: IUser = {
                    username: res.getUsername(),
                    password: data.password
                };
                dispatch({
                    type: ActionType.SET_USERNAME,
                    payload: userData
                });
            }
        } catch (err) {
            onError();
            console.log(err);
        }
    }
};

export const signup = (
    data: SignUp,
    onError: () => void
): ThunkAction<void, RootStore, null, Authenticate> => {
    return async (dispatch) => {
        try {
            const res = await Auth.signUp(data.username, data.password);
            if(res.user) {
                const userData: IUser = {
                    username: data.username,
                    password: data.password
                }
                dispatch({
                    type: ActionType.SET_USERNAME,
                    payload: userData
                })
            }
        } catch (err) {
            onError();
            console.log(err);
        }
    }
}

export const logout = (): ThunkAction<void, RootStore, null, Authenticate> => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await Auth.signOut();
            dispatch({
                type: ActionType.LOGOUT_START
            })
        } catch (err) {
            dispatch(setLoading(false));
        }
    }
}