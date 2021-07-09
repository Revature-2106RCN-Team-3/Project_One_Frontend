import { AuthActionType } from "../actions/logRegAction";
import { ILogin } from "../../types/types";
import { ActionType } from "../action-types";

export const initState: ILogin = {
    username: '',
    authenticated: false,
    loading: false,
    isError: false,
}

const loginReducer = (state = initState, action: AuthActionType) => {
    switch (action.type) {
        case ActionType.SET_USER:
            return {
                ...state,
                username: action.payload,
                authenticated: true
            }
        case ActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ActionType.LOGOUT_START:
            return {
                ...state,
                username: null,
                authenticated: false,
                loading: false
            }
        case ActionType.IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state;
    }
};

export default loginReducer;