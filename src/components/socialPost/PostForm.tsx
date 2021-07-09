import { Button, Col, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import login from "../../LoginCognito";
import { useState } from "react";

const PostForm: React.FC = () => {
  const [postText, setPostText] = useState("");

  const postChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setPostText(value);
  };
  const name = async () => {
    await login.getUserName();
  }
  const fetchPosts = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/home/post/addpost",
        { data: { userName: name, postText: postText } }
      );
      
    } catch (err) {
      console.log(err);

    }
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
              value={postText}
              onChange={postChangeHandler}
              placeholder="write your post here..."
            />
            <Button onClick={fetchPosts}>Submit Post</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default PostForm;
