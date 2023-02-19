import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";

import background from "../assets/background.png";
import { css } from "@emotion/react";
import { register } from "../redux/actions/authAction";

function Register() {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    cf_password: "",
    category: "",
    gender: "male",
    job: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password, category, job } =
    userData;
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const toggle1 = () => {
    setOpen1(!open1);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div>
      <div className="bg-secondary01 px-[15px] md:px-[30px] font-poppins py-[40px] xl:px-[250px] lg:px-[150px]    md:pb-[50px] pb-[100px] items-center md:flex h-full">
        <div className="font-poppins lg:px-10 sm:w-3/4 mx-auto lg:my-0">
          <div>
            <h4 className="flex justify-center text-2xl font-semibold mb-[10px] text-white">
              Travail
            </h4>
            <h4 className="flex justify-center text-3xl font-semibold mb-[16px] text-white">
              Welcome back
            </h4>
            <h4 className="flex justify-center text-xs font-medium text-gray-400">
              Please sign in
            </h4>
          </div>

          <form className="mt-[24px]" onSubmit={handleSubmit}>
            <div className="">
              <div className="mb-[24px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full  "
                    autoComplete="on"
                    name="fullname"
                    type="text"
                    placeholder="Enter full name"
                    onChange={handleChangeInput}
                    value={fullname}
                    style={{
                      background: `${alert.fullname ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert.fullname ? alert.fullname : ""}
                </h2>
              </div>
              <div className="mt-[24px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    autoComplete="on"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    onChange={handleChangeInput}
                    value={username.toLowerCase().replace(/ /g, "")}
                    style={{
                      background: `${alert.username ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert.username ? alert.username : ""}
                </h2>
              </div>
              <div className="mt-[24px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    autoComplete="on"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    onChange={handleChangeInput}
                    value={email}
                    style={{
                      background: `${alert.email ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert.email ? alert.email : ""}
                </h2>
              </div>
              <div className="mt-[24px]">
                <select
                  name="category"
                  onChange={handleChangeInput}
                  style={{
                    background: `${alert.category ? "#F5B7B1 " : ""}`,
                  }}
                  className="flex justify-center  py-[18px] rounded-[8px] border-[0.5px] text-sm text-gray-400 pl-[32px] w-full"
                >
                  <option value="">Please choose a category</option>
                  <option value="service_provider">Service provider</option>
                  <option value="client">Client</option>
                </select>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert.category ? alert.category : ""}
                </h2>
              </div>
              {userData.category === "service_provider" ? (
                <div className="mt-[24px]">
                  <div className="flex justify-center">
                    <input
                      className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                      autoComplete="on"
                      name="job"
                      type="text"
                      placeholder="Enter your Work type"
                      onChange={handleChangeInput}
                      value={job}
                      style={{
                        background: `${alert.job ? "#F5B7B1 " : ""}`,
                      }}
                    />
                  </div>
                  <h2 className="text-red-300 text-sm font-light mt-[10px]">
                    {alert.job ? alert.job : ""}
                  </h2>
                </div>
              ) : null}
              <div className="mt-[24px]">
                <div className="flex justify-center relative">
                  <input
                    className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    autoComplete="on"
                    name="password"
                    type={open === false ? "password" : "text"}
                    placeholder="Enter your password"
                    onChange={handleChangeInput}
                    value={password}
                    style={{
                      background: `${alert.password ? "#F5B7B1 " : ""}`,
                    }}
                  />
                  <div className="absolute right-[25px] top-[15px] text-2xl">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert.password ? alert.password : ""}
                </h2>
              </div>
              <div className="mt-[24px]">
                <div className="flex justify-center relative">
                  <input
                    className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    autoComplete="on"
                    name="cf_password"
                    type={open1 === false ? "password" : "text"}
                    placeholder="Enter your password"
                    onChange={handleChangeInput}
                    value={cf_password}
                    style={{
                      background: `${alert.cf_password ? "#F5B7B1 " : ""}`,
                    }}
                  />
                  {/* <div className="absolute right-[25px] top-[15px] text-2xl">
                    {open1 === false ? (
                      <AiFillEye onClick={toggle1} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle1} />
                    )}
                  </div> */}
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert.cf_password ? alert.cf_password : ""}
                </h2>
              </div>
              <div className="mt-[24px] flex">
                <label
                  className="text-white flex items-center mr-[40px]"
                  htmlFor="male"
                >
                  Male:{" "}
                  <input
                    className="ml-[5px]"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    defaultChecked
                    onChange={handleChangeInput}
                  />
                </label>
                <label className="text-white flex items-center" htmlFor="male">
                  Female:{" "}
                  <input
                    className="ml-[5px]"
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
            </div>
            <div className="flex  mt-[30px]">
              <h4 className="text-xs font-medium text-gray-400">
                Forgot your password?
              </h4>
              <h4 className="text-xs font-medium text-blue-400 border-b-[1px] ml-1 border-blue-400">
                <Link to="/forgotpassword">Click here</Link>
              </h4>
            </div>

            <div className=" mt-[64px]">
              <button
                type="submit"
                className="text-white text-sm font-medium bg-primary01 w-full h-[55px] rounded-[8px] hover:bg-blue-700"
              >
                {loading === true ? (
                  <ClipLoader
                    color={"#ffff"}
                    loading={loading}
                    css={override}
                    size={30}
                  />
                ) : (
                  <p className="">Register</p>
                )}
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-[64px]">
            <h4 className="text-sm font-medium text-gray-400">
              Already have an account?
            </h4>
            <h4 className="text-sm font-medium text-blue-400  ml-1 ">
              <Link to="/login">Login Now</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
