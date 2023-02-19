import React from "react";
import LeftSide from "../../components/message/LeftSide";

const Message = () => {
  return (
    <div className="message  xl:mx-[250px] lg:mx-[150px] lg:pb-0 mb-[50px] mt-[50px] lg:mt-0  flex">
      <div className="col-md-4 border-right px-0">
        <LeftSide />
      </div>
      <div className="col-md-8 px-0 right_mess">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <h1 className="text-[60px] font-semibold text-primary01 italic">
            Travail
          </h1>
          <h4 className="text-[14px] text-gray-300">
            Start a conversation with a service provider
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Message;
