import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { follow, unfollow } from "../redux/actions/profileAction";

function FollowBtn({ user }) {
  const [followed, setFollowed] = useState(false);

  const { auth, profile, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (auth.user.following.find((item) => item._id === user._id)) {
      setFollowed(true);
    }
    return () => setFollowed(false);
  }, [auth.user.following, user._id]);

  const handleFollow = async () => {
    if (load) return;

    setFollowed(true);
    setLoad(true);
    await dispatch(follow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  const handleUnFollow = async () => {
    if (load) return;

    setFollowed(false);
    setLoad(true);
    await dispatch(unfollow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  return (
    <>
      {followed ? (
        <button
          className={
            user.category === "client"
              ? "hidden"
              : "text-[15px] border  p-[7px] text-white rounded-[5px] hover:text-[16px] hover:bg-red-600 hover:border-red-600 bg-red-500 w-[100px] h-[40px]"
          }
          onClick={handleUnFollow}
        >
          UnFollow
        </button>
      ) : (
        <button
          className={
            user.category === "client"
              ? "hidden"
              : "text-[15px] font-medium border-[2px] border-primary01 p-[7px] text-primary01 rounded-[5px] hover:text-blue-500  hover:border-blue-500 bg-white w-[100px] h-[40px]"
          }
          onClick={handleFollow}
        >
          Follow
        </button>
      )}
    </>
  );
}

export default FollowBtn;
