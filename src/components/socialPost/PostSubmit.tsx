import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
  Row,
  Col,
  UncontrolledCollapse,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";
import { RootState } from "../../redux/reducers";
import SocialPostPage from "./SocialCommentsList";
import SocialCommentsPage from "./SocialCommentsList";
import { PostAction, setPost } from "../../redux/actions/socialPostActions";
import axios from "axios";

const PostForm: React.FC = () => {
  const posts = useSelector((state: RootState) => state.allPosts.posts);
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    try{
    const response = await axios
      .get("http://localhost:3001/api/home/post/getall")
    dispatch(setPost(response.data.posts.Items));
    }catch(err){
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts)
  
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

export default PostForm;
