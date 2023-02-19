import React, { useState, useEffect } from "react";
import PostThumb from "../PostThumb";
import LoadIcon from "../../assets/loading.gif";
import LoadMoreBtn from "../LoadMoreBtn";
import { getDataApi } from "../../utils/fetchData";
import { PROFILE_TYPES } from "../../redux/actions/profileAction";

function Posts({ auth, id, dispatch, profile }) {
  const [posts, setPosts] = useState([]);
  const [result, setResult] = useState(9);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    profile.posts.forEach((data) => {
      if (data._id === id) {
        setPosts(data.posts);
        setResult(data.result);
        setPage(data.page);
      }
    });
  }, [profile.posts, id]);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(
      `user_posts/${id}?limit=${page * 9}`,
      auth.token
    );
    const newData = { ...res.data, page: page + 1, _id: id };
    dispatch({ type: PROFILE_TYPES.UPDATE_POST, payload: newData });
    setLoad(false);
  };

  return (
    <div>
      <PostThumb posts={posts} result={result} />

      {load && (
        <div className="w-[40px] mx-auto">
          <img src={LoadIcon} alt="loading" />
        </div>
      )}

      <LoadMoreBtn
        result={result}
        page={page}
        load={load}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
}

export default Posts;
