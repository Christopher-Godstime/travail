import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-secondary01 px-[15px] md:px-[30px] font-poppins py-[40px] xl:px-[250px] lg:px-[150px] md:flex justify-around">
      <h4 className="flex justify-center">
        <NavLink
          exact
          activeClassName="text-white text-[20px] font-light border-b-2 border-white pb-[15px] w-[200px] flex justify-center"
          className="text-gray-500 text-[20px] font-light border-b-2 pb-[15px] w-[200px] flex justify-center border-gray-500 hover:text-white "
          to="/"
        >
          Services Review
        </NavLink>
      </h4>
      <h4 className="flex justify-center md:mt-0 mt-[20px]">
        <NavLink
          exact
          activeClassName="text-white text-[20px] font-light border-b-2 border-white pb-[15px] w-[200px] flex justify-center"
          to="/service-provider"
          className="text-gray-500 text-[20px] font-light border-b-2 pb-[15px] w-[200px] flex justify-center border-gray-500 hover:text-white "
        >
          Service Provider
        </NavLink>
      </h4>
      <h4 className="flex justify-center md:mt-0 mt-[20px]">
        <NavLink
          exact
          activeClassName="text-white text-[20px] font-light border-b-2 border-white pb-[15px] w-[200px] flex justify-center"
          className="text-gray-500 text-[20px] font-light border-b-2 pb-[15px] w-[200px] flex justify-center border-gray-500 hover:text-white "
          to="/client"
        >
          Client
        </NavLink>
      </h4>
    </div>
  );
}

export default Nav;
