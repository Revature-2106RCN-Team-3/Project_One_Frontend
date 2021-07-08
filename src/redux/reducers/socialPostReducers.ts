import { PostAction } from "../constants/actionTypes";

const initialState = {
  posts: [],
};

export const socialPostReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case PostAction.SET_POST:
            return {...state, posts: payload};
        default:
            return state;
    }
}

export const selectedPostReducer = (state = {}, {type, payload}) =>{
    switch(type){
        case PostAction.SELECT_POST:
            return {...state, ...payload}
        case PostAction.REMOVE_SELECTED_POST:
            return {}
        default:
            return state;
    }
}