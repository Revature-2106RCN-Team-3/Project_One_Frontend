import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


//! add a return object here using cards
const SocialPostComponent = () => {
    const posts = useSelector((state) => state.allPosts.posts);
    const renderList = posts.map((post: { userName: string; post_date_time: string; postText: string}) => {
        const {userName, post_date_time, postText} = post;
        return(
            <div>

            </div>
        );
    });
    return <>{renderList}</>;
};

export default SocialPostComponent;
