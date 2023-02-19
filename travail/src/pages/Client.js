import React, { useState, useEffect } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import background from "../assets/background.png";
import { css } from "@emotion/react";
import Nav from "../components/Nav";

function Client() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div>
      <Nav />
      <div className="bg-secondary px-[15px] md:px-[30px] font-poppins py-[40px] xl:px-[250px] lg:px-[150px]    md:pb-[50px] pb-[100px] items-center md:flex">
        <div className="hidden lg:flex lg:w-1/2">
          <img src={background} />
        </div>
        <div className="font-poppins lg:px-10 lg:w-1/2 sm:w-3/4 mx-auto lg:my-0">
          <div>
            <h4 className="flex justify-center text-2xl font-semibold mb-[10px] text-white">
              Client area
            </h4>
            <h4 className="flex justify-center text-3xl font-semibold mb-[16px] text-white">
              Welcome back
            </h4>
            <h4 className="flex justify-center text-xs font-medium text-gray-400">
              Please sign in as a client
            </h4>
          </div>

          <form className="mt-[24px]">
            <div className="">
              <div>
                <div className="flex justify-center">
                  <input
                    className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    autoComplete="on"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
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
                <Link to="/forgotpassword">Click here</Link>
              </h4>
            </div>

            <div className=" mt-[64px]">
              <button
                type="submit"
                className="text-white text-sm font-medium bg-primary w-full h-[55px] rounded-[8px] hover:bg-blue-700"
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
          <div className="flex justify-center mt-[64px]">
            <h4 className="text-sm font-medium text-gray-400">New here?</h4>
            <h4 className="text-sm font-medium text-blue-400  ml-1 ">
              <Link to="/create">Create an account</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
