import { PostAction, IAppActions } from "./socialPostActions";
import { IAppState, initialState } from "./socialPostStore";


export const reducers = (state: IAppState = initialState, action: IAppActions): IAppState => {
    const newState = {...state};
    switch(action.type){
        case PostAction.ADD_POST:
            newState.posts.push({userName: '', postId: '', parentPostId: '', postText: '', like: false, dislikes: false, mainPost: 1});
            newState.editPostState.currentPost= newState.posts.length-1;
            newState.editPostState.edit=true;
            return newState;
        case PostAction.SELECT_POST:
            newState.editPostState.currentPost = action.payload.selection;
            newState.editPostState.edit=true;
            return newState;
        case PostAction.EDIT_POST:
            newState.posts = [
                ...newState.posts.slice(0, newState.editPostState.currentPost),
                action.payload.post,
                ...newState.posts.slice(newState.editPostState.currentPost + 1, newState.posts.length),
              ];
              newState.editPostState.currentPost=-1;
              newState.editPostState.edit=false;
              return newState;
        default:
            return newState;
    }

}