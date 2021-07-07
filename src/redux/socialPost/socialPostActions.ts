import { IPost } from "../../models/socialPostModel";


export enum PostAction {
    // All you groovy post related actions
    ADD_POST = 'Add Post',
    REMOVE_POST = 'Remove Post',
    EDIT_POST = 'Edit Post',
    DELETE_POST = 'Delete Post',
    SELECT_POST = 'Select Post',
    LIKE_POST = 'Like Post',
    DISLIKE_POST = 'Dislike Post',
    REPORT_POST = 'Report Post',
}

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

//TODO undecided if i want this in addition to postAction or remove this action
export enum CommentAction {
    // All of your identical comment related actions
    ADD_COMMENT = 'Add Post',
    REMOVE_COMMENT = 'Remove Post',
    EDIT_COMMENT = 'Edit Post',
    DELETE_COMMENT = 'Delete Post',
    SELECT_COMMENT = 'Select Post',
    LIKE_COMMENT = 'Like Comment',
    DISLIKE_COMMENT = 'Dislike Comment',
    REPORT_COMMENT = 'Report Comment'
}