import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Input } from "reactstrap";
import { addPost, PostAction } from "../../redux/actions/socialPostActions";
import PostSubmit from "./PostSubmit";

const PostForm: React.FC = () => {
  const [postText, setPostText] = useState("");

  const postChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setPostText(value);
  };
  const dispatch = useDispatch();

  const addClick = () => {
    dispatch(addPost);
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
