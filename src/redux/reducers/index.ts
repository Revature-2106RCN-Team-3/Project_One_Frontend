import { combineReducers } from "redux";
import { socialPostReducer, selectedPostReducer } from "./socialPostReducers";
const reducers = combineReducers({
  allPosts: socialPostReducer,
  posts: selectedPostReducer,
});
export type RootState = ReturnType<typeof reducers>