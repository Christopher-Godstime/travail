import React from "react";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import { useSelector } from "react-redux";

function Followers({ users, setShowFollowers }) {
  const { auth } = useSelector((state) => state);
  return (
    <div className="follow">
      <div className="follow_box">
        <h5 className="text-center font-medium mb-[10px]">Followers</h5>
        <hr />

        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            setShowFollowers={setShowFollowers}
          >
            {auth.user._id !== user._id && <FollowBtn user={user} />}
          </UserCard>
        ))}

        <div
          className="close cursor-pointer"
          onClick={() => setShowFollowers(false)}
        >
          &times;
        </div>
      </div>
    </div>
  );
}

export default Followers;
