import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../redux/actions/socialPostActions";
import SocialPostComponent from "./socialPost";
import { RootState } from "../../redux/reducers";
import { Col, Row } from "reactstrap";
import PostForm from "./PostForm";

const SocialPostPage: React.FC = () => {
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
    <div>
      <Row>
        <Col>
          <PostForm />
        </Col>
        <Col>
          <SocialPostComponent />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default SocialPostPage;
