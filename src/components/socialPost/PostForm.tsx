import React, { useState } from "react";
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
import { PostAction } from "../../redux/actions/socialPostActions";
import PostSubmit from "./PostSubmit";
import { IPost } from "../../models/socialPostModel";

const PostForm: React.FC = () => {
  const [postText, setPostText] = useState('');

  const postChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setPostText(value)
}
const dispatch = useDispatch();

const addClick = () => {
    dispatch({
      type: PostAction.ADD_POST,
      payload: {postText},
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
              id="postText"
              onChange={postChangeHandler}
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
