import { combineReducers } from "redux";
import loginRegReducer from './loginRegReducer'

const reducers = combineReducers({
    auth: loginRegReducer
});

export default reducers;