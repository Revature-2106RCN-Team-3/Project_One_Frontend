import { combineReducers } from "redux";
import { socialPostReducer, selectedPostReducer, addPostReducer } from "./socialPostReducers";
import loginRegReducer from './loginRegReducer'

export const reducers = combineReducers({
  allPosts: socialPostReducer,
  addPost: addPostReducer,
  getComments: socialPostReducer,
  posts: selectedPostReducer,
  auth: loginRegReducer
});
export type RootState = ReturnType<typeof reducers>