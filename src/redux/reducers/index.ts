import { combineReducers } from "redux";
import { socialPostReducer, selectedPostReducer } from "./socialPostReducers";
export const reducers = combineReducers({
  allPosts: socialPostReducer,
  posts: selectedPostReducer,
});
export type RootState = ReturnType<typeof reducers>