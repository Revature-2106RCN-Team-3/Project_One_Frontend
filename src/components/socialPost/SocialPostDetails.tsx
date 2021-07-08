import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedPost, removeSelectedPost } from "../../redux/actions/socialPostActions";
import { RootState } from "../../redux/reducers";


//! add route for pulling individual parent post
const SocialPostDetails = () => {
    const {socialPostId} = useParams();
    let post = useSelector((state: RootState) => state.allPosts.posts);
    const {userName, postText, parentPostId, post_date_time, mainPost, like, dislike} = post;
    const dispatch= useDispatch();
    const fetchPostDetail = async (postId: string, userName: string) => {
        const response = await axios({
            method: 'GET',
            url: "http://localhost:3000/api/home/post/",
            data: {
                userName: userName,
                postId: postId
            }
        }).catch((err) => {
        console.log("Err: ", err);
        })
        dispatch(selectedPost(response))
    }
    useEffect(() =>{
        if(socialPostId && socialPostId !== "") fetchPostDetail(socialPostUserName, socialPostId);
        return() => {
            dispatch(removeSelectedPost());
        };
    }, [socialPostId]);
    return(
        <div></div>
    );
}

export default SocialPostDetails;