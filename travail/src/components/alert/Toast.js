import React from "react";

function Toast({ msg, handleShow, bgColor }) {
  return (
    <div
      className={`fixed  text-white ${bgColor} px-[5px] rounded-[5px]`}
      style={{ top: "5px", right: "5px", minWidth: "200px", zIndex: 50 }}
    >
      <div
        className={`flex justify-between items-center text-white ${bgColor}`}
      >
        <strong className="">{msg.title}</strong>
        <div>
          <button
            data-dismiss="toast text-white"
            className="text-[30px] "
            style={{ outline: "none" }}
            onClick={handleShow}
          >
            &times;
          </button>
        </div>
      </div>
      <div className="mt-[15px]">{msg.body}</div>
    </div>
  );
}

export default Toast;
