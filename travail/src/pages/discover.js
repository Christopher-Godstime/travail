import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDiscoverPosts,
  DISCOVER_TYPES,
} from "../redux/actions/discoverAction";
import LoadIcon from "../assets/loading.gif";
import PostThumb from "../components/PostThumb";
import LoadMoreBtn from "../components/LoadMoreBtn";
import { getDataApi } from "../utils/fetchData";

function Discover() {
  const { auth, discover } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!discover.firstLoad) {
      dispatch(getDiscoverPosts(auth.token));
    }
  }, [dispatch, auth.token, discover.firstLoad]);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(
      `post_discover?limit=${discover.page * 9}`,
      auth.token
    );
    dispatch({ type: DISCOVER_TYPES.UPDATE_POST, payload: res.data });
    setLoad(false);
  };

  return (
    <div className="xl:mx-[250px] lg:mx-[150px] mt-[50px] lg:mt-0 mb-[70px] lg:mb-0">
      {discover.loading ? (
        <div className="w-[40px] mx-auto mt-[100px]">
          <img src={LoadIcon} alt="loading" />
        </div>
      ) : (
        <PostThumb posts={discover.posts} result={discover.result} />
      )}
      {load && (
        <div className="w-[40px] mx-auto">
          <img src={LoadIcon} alt="loading" />
        </div>
      )}
      {!discover.loading && (
        <LoadMoreBtn
          result={discover.result}
          page={discover.page}
          load={load}
          handleLoadMore={handleLoadMore}
        />
      )}
    </div>
  );
}

export default Discover;
