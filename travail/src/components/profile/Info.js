import React, { useState, useEffect } from "react";
import Avatar from "../Avatar";
import EditProfile from "./EditProfile";
import FollowBtn from "../FollowBtn";
import Followers from "./Followers";
import Following from "./Following";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

function Info({ id, auth, profile, dispatch }) {
  const [userData, setUserData] = useState([]);
  const [onEdit, setOnEdit] = useState(false);

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  useEffect(() => {
    if (id === auth.user._id) {
      setUserData([auth.user]);
    } else {
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData);
    }
  }, [id, auth, dispatch, profile.users]);

  useEffect(() => {
    if (showFollowers || showFollowing || onEdit) {
      dispatch({ type: GLOBALTYPES.MODAL, payload: true });
    } else {
      dispatch({ type: GLOBALTYPES.MODAL, payload: false });
    }
  }, [showFollowers, showFollowing, onEdit, dispatch]);

  return (
    <div className="info mb-[50px] mt-[60px] lg:mt-0">
      {userData.map((user) => (
        <div className="info_container" key={user._id}>
          <div className="w-[150px]  rounded-full">
            <Avatar src={user.avatar} />
          </div>

          <div className="info_content">
            <div className="info_content_title ">
              <h2 className="text-[20px]">{user.username}</h2>
              {user._id === auth.user._id ? (
                <button
                  className="text-[15px] font-medium border-[2px] border-primary01 p-[7px] text-primary01 rounded-[5px] hover:text-blue-500 hover:bg-primary01 hover:border-blue-500 bg-white"
                  onClick={() => setOnEdit(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <FollowBtn user={user} />
              )}
            </div>

            <div className="follow_btn flex">
              <span
                className={
                  user.category === "client"
                    ? "hidden"
                    : "mr-[20px] font-medium cursor-pointer"
                }
                onClick={() => setShowFollowers(true)}
              >
                <div className="flex justify-center">
                  {user.followers.length}
                </div>
                <div>Followers</div>
              </span>
              <span
                className="font-medium cursor-pointer"
                onClick={() => setShowFollowing(true)}
              >
                <div className="flex justify-center">
                  {user.following.length}
                </div>
                <div>Following</div>
              </span>
            </div>

            <div>
              <h6 className="font-normal text-[15px]">{user.fullname}</h6>
              <h6 className="font-medium text-red-500 text-[15px]">
                {user.mobile}
              </h6>
            </div>
            <p
              className={
                user.category === "client" ? "hidden" : "flex text-[15px]"
              }
            >
              {user.address}
            </p>
            <h6
              className={
                user.category === "client"
                  ? "hidden"
                  : "font-medium text-[15px]"
              }
            >
              {user.email}
            </h6>
            <h6
              className={
                user.category === "client"
                  ? "hidden"
                  : "font-medium text-[16px] text-primary01"
              }
            >
              {user.job}
            </h6>
            <h6
              className={
                user.category === "service_provider"
                  ? "font-medium text-primary01 text-[18px]"
                  : "hidden"
              }
            >
              Service Provider
            </h6>
            <h6
              className={
                user.category === "client"
                  ? "font-medium text-primary01 text-[25px]"
                  : "hidden"
              }
            >
              Client
            </h6>
            <a
              className={
                user.category === "client" ? "hidden" : "flex text-blue-500"
              }
              href={user.website}
              target="_blank"
              rel="noreferrer"
            >
              {user.website}
            </a>
            <p
              className={
                user.category === "client"
                  ? "hidden"
                  : "flex text-[13px] font-medium"
              }
            >
              {user.story}
            </p>
          </div>

          {onEdit && <EditProfile user={user} setOnEdit={setOnEdit} />}

          {showFollowers && (
            <Followers
              users={user.followers}
              setShowFollowers={setShowFollowers}
            />
          )}

          {showFollowing && (
            <Following
              users={user.following}
              setShowFollowing={setShowFollowing}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Info;
