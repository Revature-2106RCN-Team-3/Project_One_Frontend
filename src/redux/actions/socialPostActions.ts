import { IPost } from "../../models/socialPostModel";
import { PostAction } from "../constants/actionTypes";


export interface IPostActions {
    type: PostAction,
    payload: {posts: IPost}
}

export const setPost = (posts) => {
    return{ 
        type: PostAction.SET_POST,
        payload: posts,
    };
};

export const selectedPost = (postId: string) => {
    return{ 
        type: PostAction.SELECT_POST,
        payload: postId,
    };
};

export const removeSelectedPost = () => {
    return{ 
        type: PostAction.REMOVE_SELECTED_POST,
    };
};