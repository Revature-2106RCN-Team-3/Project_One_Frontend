import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../redux/actions/socialPostActions";
import SocialPostComponent from "./SocialPost";
import { RootState } from "../../redux/reducers";

const SocialPostPage = () => {
  const posts = useSelector((state: RootState) => state.allPosts.posts);
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    const response = await axios
      .get("http://localhost:3000/api/home/post/")
      .catch((err) => {
        console.log("err: ", err);
      });
    dispatch(setPost(response));
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <SocialPostComponent />
    </div>
  );
};

export default SocialPostPage;
