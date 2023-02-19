import React from "react";
import review from "../assets/review.jpg";

function ServicesReview() {
  return (
    <div className="bg-secondary px-[15px] md:px-[30px] font-poppins py-[40px] xl:px-[250px] lg:px-[150px] md:grid grid-cols-2 gap-[20px]  pt-[50px] md:pb-[50px] pb-[100px] items-center">
      <div className="flex justify-center md:justify-start">
        <div className="w-2/3 ">
          <div className="">
            <h4 className="md:text-3xl text-xl text-white font-light leading-[40px] md:text-left text-center">
              Take advantage of Travail's capabilities in your environments and
              businesses
            </h4>
            <h4 className="text-white font-extralight text-[16px] mt-[25px] md:text-left text-center">
              Have access to thousands of businesses and service provider in
              your location, taking advantage of the no stress in finding
              service providers
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-[30px] md:mt-0">
        <img src={review} />
      </div>
    </div>
  );
}

export default ServicesReview;
