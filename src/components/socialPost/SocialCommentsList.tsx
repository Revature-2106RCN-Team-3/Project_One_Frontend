import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../redux/actions/socialPostActions";
import SocialPostComponent from "./SocialPost";
import { RootState } from "../../redux/reducers";
import { useParams } from "react-router-dom";
import SocialComments from "./SocialComments";

const SocialCommentsPage: React.FC = () => {
    const parentPostId = useParams();
  const posts = useSelector((state: RootState) => state.allPosts.posts);
//   const {userName, postText, parentPostId, post_date_time, mainPost, like, dislike} = posts;
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    try{
    const response = await axios
      .get("http://localhost:3001/api/home/post/getcomments", {data: {parentPostId: parentPostId}})
    dispatch(setPost(response.data.posts.Items));
    }catch(err){
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts)
  return (
    <div>
      <SocialComments />
    </div>
  );
};

export default SocialCommentsPage;