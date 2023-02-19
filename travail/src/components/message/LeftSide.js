import React, { useState, useEffect, useRef } from "react";
import UserCard from "../UserCard";
import { useSelector, useDispatch } from "react-redux";
import { getDataApi } from "../../utils/fetchData";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { useHistory, useParams } from "react-router-dom";
import {
  MESS_TYPES,
  getConversations,
} from "../../redux/actions/messageAction";

const LeftSide = () => {
  const { auth, message, online } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);

  const history = useHistory();
  const { id } = useParams();

  const pageEnd = useRef();
  const [page, setPage] = useState(0);

  useEffect(() => {
    // if (!search && !job && !location) return setSearchUsers([]);
    if (search || job || location) {
      setSearchUsers([]);
      getDataApi(
        `search?username=${search}&job=${job}&address=${location}`,
        auth.token
      )
        .then((res) => {
          setSearchUsers(res.data.users);
        })
        .catch((err) => {
          dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg },
          });
        });
    } else {
      setSearchUsers([]);
    }
  }, [job, search, location, auth.token, dispatch]);

  const isActive = (user) => {
    if (id === user._id) return "active";
    return "";
  };

  const handleAddUser = (user) => {
    setSearch("");
    setSearchUsers([]);
    dispatch({
      type: MESS_TYPES.ADD_USER,
      payload: { ...user, text: "", media: [] },
    });
    return history.push(`/login/message/${user._id}`);
  };

  useEffect(() => {
    if (message.firstLoad) return;
    dispatch(getConversations({ auth }));
  }, [dispatch, auth, message.firstLoad]);

  // load more
  useEffect(() => {
    const observe = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((p) => p + 1);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observe.observe(pageEnd.current);
  }, [setPage]);

  useEffect(() => {
    if (message.resultUsers >= (page - 1) * 9 && page > 1) {
      dispatch(getConversations({ auth, page }));
    }
  }, [message.resultUsers, page, id, auth, dispatch]);

  // check user online - offline
  useEffect(() => {
    if (message.firstload) {
      dispatch({ type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online });
    }
  }, [online, message.firstload, dispatch]);

  const newOnline = online.filter((val, id, array) => array.indexOf(val) == id);

  return (
    <>
      <form className="">
        <input
          className="h-[60px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 w-full placeholder:text-gray-500 placeholder:text-[15px] pl-[10px]"
          type="text"
          value={search}
          placeholder="Enter username to Search..."
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
          }
        />
        <input
          className="h-[60px] bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100  w-full placeholder:text-gray-500 placeholder:text-[15px] pl-[10px]"
          type="text"
          value={location}
          placeholder="Enter location to Search..."
          onChange={(e) =>
            setLocation(e.target.value.toLowerCase().replace(/ /g, ""))
          }
        />
        <input
          className="h-[60px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 w-full placeholder:text-gray-500 placeholder:text-[15px] pl-[10px]"
          type="text"
          value={job}
          placeholder="Enter work type to Search..."
          onChange={(e) =>
            setJob(e.target.value.toLowerCase().replace(/ /g, ""))
          }
        />
        {/* <button type="submit" style={{ display: "none" }}>
          Search
        </button> */}
      </form>

      <div className="message_chat_list">
        {searchUsers.length !== 0 ? (
          <>
            {searchUsers.map((user) => (
              <div
                key={user._id}
                className={
                  user.category === "client" || auth.user._id === user._id
                    ? "hidden"
                    : `message_user ${isActive(user)}`
                }
                onClick={() => handleAddUser(user)}
              >
                <UserCard user={user} />
              </div>
            ))}
          </>
        ) : (
          <>
            {message.users.map((user) => (
              <div
                key={user._id}
                className={
                  user.category === "client"
                    ? "hidden"
                    : `message_user ${isActive(user)}`
                }
                onClick={() => handleAddUser(user)}
              >
                <UserCard user={user} msg={true}>
                  {newOnline.map((itsOnline, index) => (
                    <h4
                      key={index}
                      className={
                        itsOnline.includes(user._id)
                          ? "text-[11px] p-[3px] rounded-full bg-gray-200 font-light"
                          : "hidden"
                      }
                    >
                      Available
                    </h4>
                  ))}
                </UserCard>
              </div>
            ))}
          </>
        )}

        <button ref={pageEnd} style={{ opacity: 0 }}>
          Load more
        </button>
      </div>
    </>
  );
};

export default LeftSide;
