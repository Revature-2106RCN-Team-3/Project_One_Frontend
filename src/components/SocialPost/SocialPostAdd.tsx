import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../redux/actions/socialPostActions";
import SocialPostComponent from "./SocialPost";
import { RootState } from "../../redux/reducers";
import PostForm from "./PostForm";

const SocialPostAdd: React.FC = () => {
  const posts = useSelector((state: RootState) => state.allPosts.posts);
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/home/post/getall"
      );
      dispatch(setPost(response.data.posts.Items));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div className='row'>
      <div className="col-12 pt-3 justify-content-center">
        <a href="/posts" role="button" className="btn btn-info">Add Post?</a>
      </div>
      <div className="col-12 px-5 py-5">
        <SocialPostComponent />
      </div>
    </div>
  );
};

export default SocialPostAdd;