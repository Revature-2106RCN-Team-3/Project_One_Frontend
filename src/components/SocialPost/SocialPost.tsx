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

const SocialPostComponent: React.FC = () => {
  const posts = useSelector((state: RootState) => state.allPosts.posts);
  const renderList = posts.map(
    (post: {
      post: {
        Items: {
          userName: string;
          postText: string;
          postId: string;
          parentPostId: string;
          post_date_time: string;
          mainPost: number;
          like: boolean;
          dislikes: boolean;
        };
      };
    }) => {
      const {
        username,
        post_text,
        post_id,
        parentPostId,
        post_date_time,
        mainPost,
        like,
        dislikes,
      } = post;
      return (
        <div>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>{username}</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">{post_date_time}</CardTitle>
                  <CardText>{post_text}</CardText>
                </CardBody>
                <CardFooter>
                  <Link to={`/posts/${post_id}`}>
                    <Button
                      color="primary"
                      id="toggler"
                      style={{ marginBottom: "1rem" }}
                    >
                      See Comments
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                      
                    </UncontrolledCollapse>
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
