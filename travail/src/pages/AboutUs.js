import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { RxHamburgerMenu, RxCross1, RxCaretDown } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";

function AboutUs() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const { auth } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);

  const Menus = [
    {
      name: "Dashboard",
      width: "w-[80px]",
      link: "/",
    },
    {
      name: "Services",
      width: "w-[70px]",
      link: "/services",
    },
    {
      name: "Locations",
      width: "w-[58px]",
      link: "/locations",
    },
    {
      name: "About Us",
      width: "w-[62px]",
      link: "/about-us",
    },
  ];

  const logout = () => {
    localStorage.removeItem("login");
    history.push("/");
  };
  return (
    <div>
      <div className="bg-white hidden lg:flex justify-between items-center font-poppins px-4 lg:px-10 py-[20px]">
        <div>
          <h4 className="text-primary01 text-[25px] font-bold italic">
            TraVail
          </h4>
        </div>

        <div className="flex">
          {Menus.map((menu, i) => (
            <NavLink
              exact
              activeClassName="border-b-[3px] -mb-[20px] border-primary01 duration-150 hover:no-underline"
              to={menu.link}
              className="mx-[20px]"
            >
              <div key={i}>
                <div className=" ">
                  <h4
                    className={`text-[17px] text-black mt-[6px] cursor-pointer font-normal hover:no-underline`}
                  >
                    {menu.name}
                  </h4>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="flex">
          <button className="bg-blue-500 px-[20px] text-[15px] font-light text-white py-[5px] cursor-pointer rounded-[20px]">
            <Link className="hover:no-underline" to="/login">
              Login
            </Link>
          </button>
          <button className="bg-red-500 px-[20px] text-[15px] font-light text-white py-[5px] cursor-pointer rounded-[20px] ml-[20px]">
            <Link className="hover:no-underline" to="/register">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
      <div className="lg:hidden ">
        <div className="bg-white flex justify-between font-poppins px-4 lg:px-10 py-[15px] items-center">
          <div className="">
            <h4 className="text-primary01 text-[25px] font-bold italic">
              TraVail
            </h4>
          </div>
          <div className="text-3xl">
            <RxHamburgerMenu onClick={() => setShow(!show)} />
          </div>
        </div>
        {show ? <></> : null}
        <div
          className={`top-0 left-0 absolute bg-white w-full px-4 lg:px-10 z-40 ${
            show ? "translate-y-0" : "-translate-y-full "
          } ease-in-out duration-700`}
        >
          <div className=" flex justify-between font-poppins py-[15px] items-center">
            <h4 className="text-primary01 text-[25px] font-bold italic">
              TraVail
            </h4>
            <div className="text-3xl">
              <RxCross1 onClick={() => setShow(!show)} />
            </div>
          </div>
          <div className="md:flex justify-around border-t-[1px] border-gray-300">
            <h4
              onClick={() => setShow(!show)}
              className="text-[17px] font-normal text-black my-[30px] md:mt-[15px] cursor-pointer hover:font-semibold hover:duration-300 hover:ease-in-out flex justify-center"
            >
              <Link className="hover:no-underline" to="/">
                Dashboard
              </Link>
            </h4>
            <h4
              onClick={() => setShow(!show)}
              className="text-[17px] font-normal text-black my-[30px] md:mt-[15px] cursor-pointer hover:font-semibold hover:duration-300 hover:ease-in-out flex justify-center"
            >
              <Link className="hover:no-underline" to="/services">
                Services
              </Link>
            </h4>
            <h4
              onClick={() => setShow(!show)}
              className="text-[17px] font-normal text-black my-[30px] md:mt-[15px] cursor-pointer hover:font-semibold hover:duration-300 hover:ease-in-out flex justify-center"
            >
              <Link className="hover:no-underline" to="/locations">
                Locations
              </Link>
            </h4>
            <h4
              onClick={() => setShow(!show)}
              className="text-[17px] font-normal text-black my-[30px] md:mt-[15px] cursor-pointer hover:font-semibold hover:duration-300 hover:ease-in-out flex justify-center"
            >
              <Link className="hover:no-underline" to="/about_us">
                About Us
              </Link>
            </h4>
            <div
              onClick={() => setShow2(!show2)}
              className="flex items-center justify-center mb-[20px]"
            >
              <h4
                onClick={() => setShow2(!show2)}
                className={` text-md font-normal text-black  cursor-pointer hover:font-semibold hover:duration-300 hover:ease-in-out    ${
                  show2
                    ? "font-normal text-[17px] flex justify-center"
                    : "font-normal text-[17px] flex justify-center"
                }`}
              >
                Account
              </h4>
              <div
                className={`ml-[5px] text-3xl duration-700  ${
                  show2 ? "rotate-180" : "rotate-0"
                } `}
              >
                <RxCaretDown />
              </div>
            </div>
          </div>
          <div className="">
            {show2 ? <></> : null}
            <div
              className={`${
                show2
                  ? " translate-x-0 "
                  : "-translate-x-full hidden duration-700"
              } ease-in-out duration-700`}
            >
              <div className="flex md:justify-end justify-center mb-[30px]">
                <div>
                  <Link
                    className="hover:text-white hover:no-underline"
                    to="/login"
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 px-[20px] text-[15px] font-light text-white py-[5px] cursor-pointer rounded-[20px] ">
                      Login
                    </button>
                  </Link>
                </div>
                <div>
                  <Link
                    className="hover:text-white hover:no-underline"
                    to="/register"
                  >
                    <button className="bg-red-500 hover:bg-red-600 px-[20px] text-[15px] font-light text-white py-[5px] cursor-pointer rounded-[20px] ml-[20px] ">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-screen flex justify-center items-center text-[40px] text-gray-300 font-semibold">
        Page Not Ready
      </div>
    </div>
  );
}

export default AboutUs;
