import React from "react";
import Avatar from "../Avatar";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

function Status() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div
      className={
        auth.user.category === "client" ? "hidden" : "status mt-[40px] lg:mt-0"
      }
    >
      <div className="flex">
        <div className="w-[50px]">
          <Avatar src={auth.user.avatar} />
        </div>
        <button
          className="statusBtn w-full"
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
        >
          {auth.user.username}, what are you thinking?
        </button>
      </div>
    </div>
  );
}

export default Status;
