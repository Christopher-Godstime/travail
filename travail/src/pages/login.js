import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import background from "../assets/background.png";
import { css } from "@emotion/react";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);

  const toggle = () => {
    setOpen(!open);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <div>
      <div className="bg-secondary01 px-[15px] md:px-[30px] font-poppins py-[40px] xl:px-[250px] lg:px-[150px]    md:pb-[50px] pb-[100px] items-center md:flex h-[900px]">
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
              <div>
                <div className="flex justify-center">
                  <input
                    className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    autoComplete="on"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    onChange={handleChangeInput}
                    value={email}
                  />
                </div>
              </div>
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
                  />
                  <div className="absolute right-[25px] top-[15px] text-2xl">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  mt-[8px]">
              <h4 className="text-xs font-medium text-gray-400">
                Forgot your password?
              </h4>
              <h4 className="text-xs font-medium text-blue-400 border-b-[1px] ml-1 border-blue-400">
                <Link className="hover:no-underline" to="/forgotpassword">
                  Click here
                </Link>
              </h4>
            </div>

            <div className=" mt-[64px]">
              <button
                type="submit"
                className={
                  email && password.length >= 6
                    ? "text-white text-sm font-medium bg-primary01 w-full h-[55px] rounded-[8px] hover:bg-blue-700"
                    : "text-white text-sm font-medium bg-gray-400 w-full h-[55px] rounded-[8px] "
                }
                disabled={email && password.length >= 6 ? false : true}
              >
                {loading === true ? (
                  <ClipLoader
                    color={"#ffff"}
                    loading={loading}
                    css={override}
                    size={30}
                  />
                ) : (
                  <p className="">Sign in</p>
                )}
              </button>
            </div>
          </form>
          <h4 className="text-sm font-medium text-blue-400  ml-1 flex justify-center mt-[40px]">
            <Link className="hover:no-underline" to="/">
              Go to dashboard
            </Link>
          </h4>
          <div className="flex justify-center mt-[40px]">
            <h4 className="text-sm font-medium text-gray-400">New here?</h4>
            <h4 className="text-sm font-medium text-blue-400  ml-1 ">
              <Link className="hover:no-underline" to="/register">
                Create an account
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
