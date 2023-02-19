import React, { useState, useEffect } from "react";
import Info from "../../components/profile/Info";
import Posts from "../../components/profile/Posts";
import Saved from "../../components/profile/Saved";

import { useSelector, useDispatch } from "react-redux";
import LoadIcon from "../../assets/loading.gif";
import { getProfileUsers } from "../../redux/actions/profileAction";
import { useParams } from "react-router-dom";

function Profile() {
  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [saveTab, setSaveTab] = useState(false);

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ id, auth }));
    }
  }, [id, auth, dispatch, profile.ids]);

  return (
    <div className="profile">
      <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

      <div className="xl:mx-[250px] lg:mx-[150px]">
        {auth.user._id === id && (
          <div className="profile_tab ">
            {auth.user.category === "service_provider" ? (
              <div>
                <button
                  className={saveTab ? "" : "active"}
                  onClick={() => setSaveTab(false)}
                >
                  Posts
                </button>

                <button
                  className={saveTab ? "active" : ""}
                  onClick={() => setSaveTab(true)}
                >
                  Saved
                </button>
              </div>
            ) : null}
          </div>
        )}

        {auth.user._id === id && (
          <div className="profile_tab ">
            {auth.user.category === "client" ? (
              <button className="active" onClick={() => setSaveTab(true)}>
                Saved
              </button>
            ) : null}
          </div>
        )}
      </div>

      {profile.loading ? (
        <div className="w-[40px] mx-auto mt-[100px]">
          <img src={LoadIcon} alt="loading" />
        </div>
      ) : (
        <>
          {saveTab ? (
            <div
              className={
                profile.users[0]?.category === "client"
                  ? "hidden"
                  : "xl:mx-[250px] lg:mx-[150px] mb-[80px]"
              }
            >
              {auth.user._id === id && (
                <Saved auth={auth} dispatch={dispatch} />
              )}
            </div>
          ) : (
            <div
              className={
                profile.users[0]?.category === "client"
                  ? "hidden"
                  : "xl:mx-[250px] lg:mx-[150px] mb-[80px]"
              }
            >
              <Posts
                auth={auth}
                profile={profile}
                dispatch={dispatch}
                id={id}
              />
            </div>
          )}
        </>
      )}
      {auth.user._id === id && (
        <div>
          {profile.loading ? (
            <div className="w-[40px] mx-auto mt-[100px]">
              <img src={LoadIcon} alt="loading" />
            </div>
          ) : (
            <div
              className={
                profile.users[0]?.category === "service_provider"
                  ? "hidden"
                  : "xl:mx-[250px] lg:mx-[150px] mb-[80px]"
              }
            >
              <Saved auth={auth} dispatch={dispatch} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
