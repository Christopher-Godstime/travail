import React from "react";

function Loading() {
  return (
    <div
      className="fixed loading w-full h-full"
      style={{
        background: "#0008",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <div className="flex justify-center pt-[100px]">
        <svg width="300" height="250" viewBox="0 0 40 50">
          <path
            className="fill-white flex justify-center "
            d="M 37 4 H 14 Z M 14 4 H 5 V 10 H 17 V 34 H 25 V 10 H 37 V 4"
          />
          <text className="" fill="#fff" x="5" y="45">
            Loading...
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Loading;
