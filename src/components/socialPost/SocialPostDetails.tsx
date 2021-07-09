import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedPost, removeSelectedPost } from "../../redux/actions/socialPostActions";
import { RootState } from "../../redux/reducers";


//! add route for pulling individual parent post
const SocialPostDetails: React.FC = () => {
    const postId = useParams();
    let post = useSelector((state: RootState) => state.allPosts.posts);
    const dispatch= useDispatch();
    const fetchPostDetail = async () => {
        try{
        const response = await axios
        .get("http://localhost:3000/api/home/post/getpost",{data: {userName: post.userName, postId: post.postId, parentPostId: post.parentPostId}})
        dispatch(selectedPost(response.data.post.Items))
    } catch(err) {
        console.log(err)
    }   
    }
    useEffect(() =>{
        if(postId && postId !== "") fetchPostDetail();
        return() => {
            dispatch(removeSelectedPost());
        };
    }, []);
    return(
        <div></div>
    );
}

export default SocialPostDetails;