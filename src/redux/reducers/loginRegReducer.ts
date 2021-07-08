import { AuthActionType } from "../actions/logRegAction";
import { IUser } from "../../types/types";
import { ActionType } from "../action-types";

const initState: IUser = {
    username: '',
    nickname: ''
}

const authReducer = (state = initState, action: AuthActionType) => {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            return action.payload;
        case ActionType.LOGOUT_SUCCESS:
            return initState;
        case ActionType.REGISTER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default authReducer;