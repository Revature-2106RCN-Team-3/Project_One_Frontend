import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input } from "reactstrap";
import { RootState } from "../../redux/reducers";
import { PostAction, setPost } from "../../redux/actions/socialPostActions";
import axios from "axios";

const PostSubmit: React.FC = () => {
  const posts = useSelector((state: RootState) => state.addPost.posts);
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/home/post/addpost",
        { data: { userName: posts.userName, postText: posts.postText } }
      );
    //   dispatch(setPost(response.data.posts.Items));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);

  const addClick = () => {
    dispatch({
      type: PostAction.ADD_POST,
      payload: {},
    });
  };

  return (
    <div>
      <Form>
        <FormGroup row>
          <Col sm="auto" md={{ size: 8, offset: 1 }}>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="write your post here..."
            />
            <Button onClick={addClick}>Submit Post</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
  //   return <>{renderList}</>;
};

export default PostSubmit;
