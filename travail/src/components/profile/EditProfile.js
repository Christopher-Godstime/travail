import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkImage } from "../../utils/imageUpload";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { updateProfileUser } from "../../redux/actions/profileAction";

function EditProfile({ user, setOnEdit }) {
  const initState = {
    fullname: "",
    mobile: "",
    address: "",
    website: "",
    story: "",
    gender: "",
    job: "",
  };
  const [userData, setUserData] = useState(initState);
  const { fullname, mobile, address, website, story, job, gender } = userData;

  const [avatar, setAvatar] = useState("");

  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(auth.user);
  }, [auth.user]);

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    const err = checkImage(file);
    if (err)
      return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setAvatar(file);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileUser({ userData, avatar, auth }));
  };

  return (
    <div className="edit_profile pt-[100px] pb-[100px]">
      <button
        className="btn_close text-[15px] border  p-[7px]  rounded-[5px] text-white bg-red-500 border-red-500 mt-[100px] 
        "
        onClick={() => setOnEdit(false)}
      >
        Close
      </button>
      <form onSubmit={handleSubmit}>
        <div className="info_avatar">
          <img
            className="w-[150px] rounded-full"
            src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
            alt="avatar"
          />

          <span>
            <i className="fas fa-camera" />
            <p className="font-medium">change</p>
            <input
              className="text-[15px] font-normal w-full bg-blue-50 mt-[20px]"
              type="file"
              name="file"
              id="file_up"
              accept="image/*"
              onChange={changeAvatar}
            />
          </span>
        </div>

        <div className="form_group mt-[15px]">
          <label className="text-[15px] font-medium " htmlFor="fullname">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 w-full p-[7px] pl-[10px] rounded-[5px] text-gray-800 "
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={handleInput}
            />
            <small
              className="absolute text-red-400 text-[13px]"
              style={{
                top: "50%",
                right: "5px",
                transform: "translateY(-50%)",
              }}
            >
              {fullname.length}/25
            </small>
          </div>
        </div>

        <div className="mt-[15px]">
          <label className="text-[15px] font-medium " htmlFor="mobile">
            Mobile
          </label>
          <input
            className="border border-gray-300 w-full p-[7px] pl-[10px] rounded-[5px] mt-[5px]"
            type="text"
            name="mobile"
            value={mobile}
            onChange={handleInput}
          />
        </div>

        <div className={user.category === "client" ? "hidden" : "mt-[15px]"}>
          <label className="text-[15px] font-medium " htmlFor="address">
            Address
          </label>
          <input
            className="border border-gray-300 w-full p-[7px] pl-[10px] rounded-[5px] text-gray-800"
            type="text"
            name="address"
            value={address}
            onChange={handleInput}
          />
        </div>

        <div className={user.category === "client" ? "hidden" : "mt-[15px]"}>
          <label className="text-[15px] font-medium " htmlFor="job">
            Work Type
          </label>
          <input
            className="border border-gray-300 w-full p-[7px] pl-[10px] rounded-[5px] text-gray-800"
            type="text"
            name="job"
            value={job}
            onChange={handleInput}
          />
        </div>

        <div className={user.category === "client" ? "hidden" : "mt-[15px]"}>
          <label className="text-[15px] font-medium " htmlFor="website">
            Website
          </label>
          <input
            className="border border-gray-300 w-full p-[7px] pl-[10px] rounded-[5px] text-gray-800"
            type="text"
            name="website"
            value={website}
            onChange={handleInput}
          />
        </div>

        <div className={user.category === "client" ? "hidden" : "mt-[15px]"}>
          <label className="text-[15px] font-medium " htmlFor="story">
            Story
          </label>
          <textarea
            className="border border-gray-300 w-full p-[7px] pl-[10px] rounded-[5px] text-gray-800"
            type="number"
            name="story"
            value={story}
            cols="30"
            row="4"
            onChange={handleInput}
          />
          <small className=" text-red-400 text-[13px] flex justify-end">
            {story.length} /200
          </small>
        </div>

        <div className="mt-[15px]">
          <label className="text-[15px] font-medium " htmlFor="gender">
            Gender
          </label>
          <div className="">
            <select
              className="border border-gray-300 w-full p-[7px] pl-[10px] rounded-[5px] text-gray-800"
              name="gender"
              id="gender"
              value={gender}
              onChange={handleInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className=" mt-[15px] mb-[60px]">
          <button
            className="flex justify-center bg-primary w-full text-white py-[10px] rounded-[5px]"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
