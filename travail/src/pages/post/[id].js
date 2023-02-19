import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../redux/actions/postAction";
import LoadIcon from "../../assets/loading.gif";
import PostCard from "../../components/PostCard";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const { auth, detailPost } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost({ detailPost, id, auth }));

    if (detailPost.length > 0) {
      const newArr = detailPost.filter((post) => post._id === id);
      setPost(newArr);
    }
  }, [detailPost, dispatch, id, auth]);
  return (
    <div className="posts xl:mx-[250px] lg:mx-[150px] mt-[60px] lg:mt-0 mb-[80px] lg:mb-0">
      {post.length === 0 && (
        <div className="w-[40px] mx-auto mt-[100px]">
          <img src={LoadIcon} alt="loading" />
        </div>
      )}

      {post.map((item) => (
        <PostCard key={item._id} post={item} />
      ))}
    </div>
  );
}

export default Post;
