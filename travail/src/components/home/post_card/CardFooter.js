import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Send from "../../../assets/send.svg";
import LikeButton from "../../LikeButton";
import { useSelector, useDispatch } from "react-redux";
import {
  likePost,
  unLikePost,
  savePost,
  unSavePost,
} from "../../../redux/actions/postAction";
import ShareModal from "../../ShareModal";
import { BASE_URL } from "../../../utils/config";

function CardFooter({ post }) {
  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);

  const [isShare, setIsShare] = useState(false);

  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [saved, setSaved] = useState(false);
  const [saveLoad, setSaveLoad] = useState(false);

  // likes
  useEffect(() => {
    if (post.likes.find((like) => like._id === auth.user._id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [post.likes, auth.user._id]);

  const handleLike = async () => {
    if (loadLike) return;
    setLoadLike(true);
    await dispatch(likePost({ post, auth, socket }));
    setLoadLike(false);
  };

  const handleUnLike = async () => {
    if (loadLike) return;
    setLoadLike(true);
    await dispatch(unLikePost({ post, auth, socket }));
    setLoadLike(false);
  };

  // saved
  useEffect(() => {
    if (auth.user.saved.find((id) => id === post._id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [auth.user.saved, post._id]);

  const handleSavePost = async () => {
    if (saveLoad) return;
    setSaveLoad(true);
    await dispatch(savePost({ post, auth }));
    setSaveLoad(false);
  };

  const handleUnSavePost = async () => {
    if (saveLoad) return;
    setSaveLoad(true);
    await dispatch(unSavePost({ post, auth }));
    setSaveLoad(false);
  };

  return (
    <div className="card_footer px-[10px] md:px-[15px] font-poppins py-[5px] ">
      <div className="card_icon_menu">
        <div className="flex items-center">
          <LikeButton
            isLike={isLike}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
          />
          <Link to={`/login/post/${post._id}`} className="text-black">
            <div className="material-icons px-[5px] pt-[10px]">mms</div>
          </Link>
          <div
            className="w-[30px] material-icons px-[5px]"
            onClick={() => setIsShare(!isShare)}
          >
            share
          </div>
        </div>
        {saved ? (
          <div
            className="material-icons mt-[8px] text-info"
            onClick={handleUnSavePost}
          >
            bookmarkremove
          </div>
        ) : (
          <div className="material-icons mt-[8px]" onClick={handleSavePost}>
            bookmarkadd
          </div>
        )}
      </div>
      <div className="flex justify-between font-medium text-[15px]">
        <div className="flex  ml-[10px]">
          <h6 style={{ cursor: "pointer" }}> </h6>
          {post.likes.length}
          <h6 className="ml-[5px] mt-[1px]">likes</h6>
        </div>
        <div className="flex  mr-[10px]">
          <h6 style={{ cursor: "pointer" }}> </h6>
          {post.comments.length}
          <h6 className="ml-[5px] mt-[1px]">comments</h6>
        </div>
      </div>

      {isShare && <ShareModal url={`${BASE_URL}/login/post/${post._id}`} />}
    </div>
  );
}

export default CardFooter;
