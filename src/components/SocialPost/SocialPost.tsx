import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter } from "reactstrap";
import { RootState } from "../../redux/reducers";

const SocialPostComponent = () => {
  const posts = useSelector((state: RootState) => state.allPosts.posts);
  const renderList = posts.map(
    (post: {
      userName: string;
      postText: string;
      postId: string;
      parentPostId: string;
      post_date_time: string;
      mainPost: number;
      like: boolean;
      dislike: boolean;
    }) => {
      const {
        userName,
        postText,
        postId,
        parentPostId,
        post_date_time,
        mainPost,
        like,
        dislike,
      } = post;
      return (
        <div>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      );
    }
  );
  return <>{renderList}</>;
};

export default SocialPostComponent;
