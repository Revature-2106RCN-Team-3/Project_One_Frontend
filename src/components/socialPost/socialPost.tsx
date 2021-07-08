import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
} from "reactstrap";
import { RootState } from "../../redux/reducers";
import SocialPostPage from "./SocialCommentsList";
import SocialCommentsPage from "./SocialCommentsList";

const SocialPostComponent: React.FC = () => {
  const posts = useSelector((state: RootState) => state.allPosts.posts);
  const renderList = posts.map(
    (post: {
      post: {
        Items: {
          username: string;
          post_text: string;
          post_id: string;
          parent_post_id: string;
          post_date_time: string;
          main_post: number;
          like: boolean;
          dislikes: boolean;
        };
      };
    }) => {
      const {
        username,
        post_text,
        post_id,
        parent_post_id,
        post_date_time,
        main_post,
        like,
        dislikes,
      } = post;
      return (
        <div>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader></CardHeader>
                
                <CardBody>
                  <CardTitle tag="h5">{username}</CardTitle>
                  <CardText type="date"> {post_date_time}</CardText>
                  <CardText>{post_text}</CardText>
                </CardBody>
                
                <CardFooter>
                <Link to={`/posts/${parent_post_id}/${post_id}`}>
                  <Button>Comments</Button>
                </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  );
  return <>{renderList}</>;
};

export default SocialPostComponent;
