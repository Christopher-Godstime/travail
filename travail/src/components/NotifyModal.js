import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoNotice from "../assets/notice.png";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import moment from "moment";
import {
  isReadNotify,
  NOTIFY_TYPES,
  deleteAllNotifies,
} from "../redux/actions/notifyAction";

const NotifyModal = () => {
  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIsRead = (msg) => {
    dispatch(isReadNotify({ msg, auth }));
  };

  const handleSound = () => {
    dispatch({ type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound });
  };

  const handleDeleteAll = () => {
    const newArr = notify.data.filter((item) => item.isRead === false);
    if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token));

    if (
      window.confirm(
        `You have ${newArr.length} unread notifications. Are you sure you want to delete all?`
      )
    ) {
      return dispatch(deleteAllNotifies(auth.token));
    }
  };

  return (
    <div className="" style={{ minWidth: "300px" }}>
      <div className="d-flex justify-content-between align-items-center px-3 py-3 bg-white">
        <h3 className="">Notification</h3>
        {notify.sound ? (
          <div
            className="material-icons  text-danger "
            style={{ cursor: "pointer" }}
            onClick={handleSound}
          >
            notifications
          </div>
        ) : (
          <div
            className="material-icons  text-gray-500 "
            style={{ cursor: "pointer" }}
            onClick={handleSound}
          >
            notifications
          </div>
        )}
      </div>
      <hr className="mt-0" />
      {notify.data.length === 0 && (
        <div className="flex justify-center">
          <img src={NoNotice} alt="NoNotice" className="w-[150px]" />
        </div>
      )}
      <div
        className="bg-white"
        style={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
      >
        {notify.data.map((msg, index) => (
          <div key={index} className="px-3 my-3">
            <Link
              to={`login${msg.url}`}
              className="d-flex text-dark align-items-center"
              onClick={() => handleIsRead(msg)}
            >
              <div className="w-[45px]">
                <Avatar src={msg.user.avatar} />
              </div>

              <div className="mx-1 flex-fill text-[14px]">
                <div>
                  <strong className="mr-[4px]">{msg.user.username}</strong>
                  <span>{msg.text}</span>
                </div>
                {msg.content && <small>{msg.content.slice(0, 20)}...</small>}
              </div>

              {msg.image && (
                <div style={{ width: "30px" }}>
                  {msg.image.match(/video/i) ? (
                    <video src={msg.image} width="100%" />
                  ) : (
                    <Avatar src={msg.image} size="medium-avatar" />
                  )}
                </div>
              )}
            </Link>
            <small className="text-muted d-flex justify-content-between px-2">
              {moment(msg.createdAt).fromNow()}
              {!msg.isRead && <i className="fas fa-circle text-primary" />}
            </small>
          </div>
        ))}
      </div>

      <hr className={notify.data.length === 0 ? "hidden" : "my-1"} />
      <div
        className={
          notify.data.length === 0 ? "hidden" : "text-right text-danger mr-2"
        }
        style={{ cursor: "pointer" }}
        onClick={handleDeleteAll}
      >
        Delete All
      </div>
    </div>
  );
};

export default NotifyModal;
