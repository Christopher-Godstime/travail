import React from "react";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  return (
    <>
      {isLike ? (
        <div
          className="material-icons text-red-500 mr-[10px] w-[20px]"
          onClick={handleUnLike}
        >
          favorite
        </div>
      ) : (
        <div
          className="material-icons text-gray-400 w-[20px] mr-[10px] "
          onClick={handleLike}
        >
          favorite
        </div>
      )}
    </>
  );
};

export default LikeButton;
