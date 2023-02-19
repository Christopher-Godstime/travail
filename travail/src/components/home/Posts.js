import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../PostCard";
import LoadIcon from "../../assets/loading.gif";
import LoadMoreBtn from "../LoadMoreBtn";
import { getDataApi } from "../../utils/fetchData";
import { POST_TYPES } from "../../redux/actions/postAction";

function Posts() {
  const { homePosts, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(
      `posts?limit=${homePosts.page * 9}`,
      auth.token
    );
    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: homePosts.page + 1 },
    });
    setLoad(false);
  };
  return (
    <div className="posts">
      {homePosts.posts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}

      {load && (
        <div className="w-[40px] mx-auto">
          <img src={LoadIcon} alt="loading" />
        </div>
      )}

      <LoadMoreBtn
        result={homePosts.result}
        page={homePosts.page}
        load={load}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
}

export default Posts;
