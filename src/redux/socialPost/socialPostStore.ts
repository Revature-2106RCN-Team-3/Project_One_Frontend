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
            userName: "string",
            postId: "string", // unique id tied to each post/comment/like/dislike
            postText: "string",
            parentPostId: "string", // this is used to identify parent post for comments
            like: false,
            dislikes: false,
            mainPost: 0,
        },
        {
            userName: "test",
            postId: "string", // unique id tied to each post/comment/like/dislike
            postText: "string",
            parentPostId: "string", // this is used to identify parent post for comments
            like: false,
            dislikes: false,
            mainPost: 0,
        },
      ]
}
