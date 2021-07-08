import { combineReducers } from "redux";
import { socialPostReducer, selectedPostReducer } from "./socialPostReducers";
import loginRegReducer from './loginRegReducer'

export const reducers = combineReducers({
  allPosts: socialPostReducer,
  getComments: socialPostReducer,
  posts: selectedPostReducer,
  auth: loginRegReducer
});
export type RootState = ReturnType<typeof reducers>