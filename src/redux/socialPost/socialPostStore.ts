import { IPost } from "../../models/socialPostModel";


export interface IEditPostState {
    currentPost: number;
    edit: boolean;
}

export interface IAppState {
    editPostState: IEditPostState;
    posts: IPost[];
}

export const initialState: IAppState = {
    editPostState: {
        currentPost: -1,
        edit: false
    },
    posts: [
        {
            userName: "",
            postId: "", // unique id tied to each post/comment/like/dislike
            postText: "",
        }
      ]
}
