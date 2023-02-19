import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { RxHamburgerMenu, RxCross1, RxCaretDown } from "react-icons/rx";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import br from "../assets/br.png";
import video from "../assets/video.webm";
import etsy from "../assets/etsy.png";
import paul from "../assets/paul.png";
import sony from "../assets/sony.png";
import virgin from "../assets/virgin.png";
import whole from "../assets/whole.avif";
import Nav from "../components/Nav";
import ServicesReview from "./ServicesReview";
import review from "../assets/review.jpg";

function Dashboard() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [login, setLogin] = useState("");

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
      <div className="bg-gradient-to-r from-primary01 via-blue-400 to-pink-600 md:grid grid-cols-2 gap-[20px] px-[15px] md:px-[30px] font-poppins pt-[50px] md:pb-[50px] pb-4 xl:px-[250px] lg:px-[150px] items-center">
        <div>
          <h4 className="text-white text-[20px]">Connecting People For Work</h4>
          <h4 className="text-white text-[40px] font-bold mt-[10px]">
            The Most Skilled Workers In All Field
          </h4>
          <h4 className="text-white text-[20px] mt-[10px]">
            Trusted by 1.3 million clients and 30,000 service providers and
            hyper-growth companies as a critical part of their tech stack.
          </h4>
        </div>
        <div className="mt-[50px] md:mt-0">
          <video>
            <source
              src="https://cloudinary-marketing-res.cloudinary.com/video/upload/q_auto,w_1200/v1665692778/hero_animation_2022.webm"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="">
        <div className="bg-primary01 md:grid-cols-6 grid grid-cols-3 gap-[5px] px-[15px] md:px-[30px] font-poppins py-[20px] xl:px-[250px] lg:px-[150px] items-center">
          <div className="flex justify-center">
            <img className="w-[90px]" src={br} />
          </div>
          <div className="flex justify-center">
            <img className="w-[90px]" src={whole} />
          </div>
          <div className="flex justify-center">
            <img className="w-[90px] " src={virgin} />
          </div>
          <div className="flex justify-center">
            <img className="w-[90px]" src={paul} />
          </div>
          <div className="flex justify-center">
            <img className="w-[90px]" src={sony} />
          </div>
          <div className="flex justify-center">
            <img className="w-[90px]" src={etsy} />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-secondary01 px-[15px] md:px-[30px] font-poppins py-[40px] xl:px-[250px] lg:px-[150px] ">
          <div className="flex justify-center">
            <h4 className="text-gray-500 text-[20px] font-light border-b-2 pb-[15px] w-[200px] flex justify-center border-gray-600">
              Services Review
            </h4>
          </div>
          <div className=" md:grid grid-cols-2 gap-[20px]  pt-[50px] md:pb-[50px] pb-[100px] items-center">
            <div className="flex justify-center md:justify-start">
              <div className="w-2/3 ">
                <div className="">
                  <h4 className="md:text-3xl text-xl text-white font-light leading-[40px] md:text-left text-center">
                    Take advantage of Travail's capabilities in your
                    environments and businesses
                  </h4>
                  <h4 className="text-white font-extralight text-[16px] mt-[25px] md:text-left text-center">
                    Have access to thousands of businesses and service provider
                    in your location, taking advantage of the no stress in
                    finding service providers
                  </h4>
                </div>
              </div>
            </div>
            <div className="mt-[30px] md:mt-0">
              <img src={review} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
