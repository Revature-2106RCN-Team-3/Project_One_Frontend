import { AuthActionType } from "../actions/logRegAction";
import { ILogin } from "../../types/types";
import { ActionType } from "../action-types";

export const initState: ILogin = {
    username: '',
    password: '',
    isDisabled: true,
    isError: false,
}

const loginReducer = (state = initState, action: AuthActionType) => {
    switch (action.type) {
        case ActionType.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case ActionType.SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case ActionType.SET_IS_DISABLED:
            return {
                ...state,
                isDisabled: action.payload
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isError:false
            }
        case ActionType.LOGIN_FAILED:
            return {
                ...state,
                isError: true
            }
        case ActionType.SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state;
    }
};

export default loginReducer;