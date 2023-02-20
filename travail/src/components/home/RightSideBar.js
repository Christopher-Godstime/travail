import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import LoadIcon from "../../assets/loading.gif";
import { getSuggestions } from "../../redux/actions/suggestionsAction";

const RightSideBar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="mx-[15px] md:mx-0 md:mt-3">
      <UserCard user={auth.user} />

      <div className="d-flex justify-content-between align-items-center my-[15px]">
        <h5 className="text-primary01 text-[15px]">
          Suggested service providers
        </h5>
        {!suggestions.loading && (
          <div
            className="material-icons text-[22px] font-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          >
            replay
          </div>
        )}
      </div>

      {suggestions.loading ? (
        <div className="w-[40px] mx-auto mt-[10px]">
          <img src={LoadIcon} alt="loading" />
        </div>
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <div className={user.category === "client" ? "hidden" : "flex"}>
              <UserCard key={user._id} user={user}>
                <div>
                  <FollowBtn user={user} />
                </div>
              </UserCard>
            </div>
          ))}
        </div>
      )}
      <div style={{ opacity: 0.5 }} className="my-2">
        <small>&copy; {date} Travail</small>
      </div>
    </div>
  );
};

export default RightSideBar;
