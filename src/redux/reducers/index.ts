import { combineReducers } from "redux";
import { socialPostReducer, selectedPostReducer } from "./socialPostReducers";
import loginRegReducer from './loginRegReducer';
import errorReducer from './errorReducer';
import loadingReducer from "./loadingReducer";

const reducers = combineReducers({
    allPosts: socialPostReducer,
    posts: selectedPostReducer,
    auth: loginRegReducer,
    error: errorReducer,
    loading: loadingReducer,

export type RootState = ReturnType<typeof reducers>