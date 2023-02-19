import React from "react";
import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";
import CardHeader from "./home/post_card/CardHeader";

import Comments from "./home/Comments";
import InputComment from "./home/InputComment";

function PostCard({ post }) {
  return (
    <div className="card my-[10px] border border-gray-200">
      <CardHeader post={post} />
      <CardBody post={post} />
      <CardFooter post={post} />

      <Comments post={post} />
      <InputComment post={post} />
    </div>
  );
}

export default PostCard;
