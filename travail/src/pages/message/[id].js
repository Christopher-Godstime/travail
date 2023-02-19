import React from "react";
import LeftSide from "../../components/message/LeftSide";
import RightSide from "../../components/message/RightSide";

const Conversation = () => {
  return (
    <div className="message  xl:mx-[250px] lg:mx-[150px] lg:pb-0  mt-[50px] lg:mt-0  flex ">
      <div className="col-md-4 border-right px-0 left_mess">
        <LeftSide />
      </div>
      <div className="col-md-8 px-0 bg-gray-100 z-0">
        <RightSide />
      </div>
    </div>
  );
};

export default Conversation;
