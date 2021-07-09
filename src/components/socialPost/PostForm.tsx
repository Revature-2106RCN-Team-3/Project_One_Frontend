import { Button, Col, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import login from "../../LoginCognito";
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();
  const routeChange = () => {
    let path = '/posts';
    history.push(path);
  }

  const fetchPosts = async () => {
    try {
      console.log(name, postText);
      await axios.post(
        "http://localhost:3001/api/home/post/addpost",
        { data: { userName: name, postText: postText } }
      );
      routeChange();
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
