import { combineReducers } from "redux";
import loginRegReducer from './loginRegReducer';
import errorReducer from './errorReducer';
import loadingReducer from "./loadingReducer";

const reducers = combineReducers({
    auth: loginRegReducer,
    error: errorReducer,
    loading: loadingReducer,
});

export default reducers;