import { IPost } from "../../models/socialPostModel";
import { PostAction } from "../constants/actionTypes";

export const setPost = () => {
    return{ 
        type:PostAction.SET_POST,
        payload: IPost,
    };
};









export interface IPostActions {
    type: PostAction,
    payload: {post:IPost}
}

export interface IAppActions extends IPostActions {
    type: PostAction;
    payload: {
        post:IPost,
        selection: number
    }
}
