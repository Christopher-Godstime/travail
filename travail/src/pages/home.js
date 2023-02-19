import React, { useEffect } from "react";
import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import { useSelector } from "react-redux";
import LoadIcon from "../assets/loading.gif";
import RightSideBar from "../components/home/RightSideBar";

let scroll = 0;

function Home() {
  const { homePosts, auth } = useSelector((state) => state);

  window.addEventListener("scroll", () => {
    if (window.location.pathname === "/login") {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className="home  font-poppins py-[20px] xl:px-[250px] lg:px-[150px] md:grid md:grid-cols-9 gap-[10px]  lg:pb-0 mb-[50px]">
      <div className="md:col-span-6">
        <Status />

        {homePosts.loading ? (
          <div className="w-[40px] mx-auto mt-[100px]">
            <img src={LoadIcon} alt="loading" />
          </div>
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <div>
            <h2
              className={
                auth.user.category === "service_provider"
                  ? "hidden"
                  : "text-center text-[18px] font-normal pt-[20px] mt-[50px]"
              }
            >
              Follow a service provider to see posts
            </h2>
            <h2
              className={
                auth.user.category === "client"
                  ? "hidden"
                  : "text-center text-[18px] font-normal pt-[20px]"
              }
            >
              No post
            </h2>
          </div>
        ) : (
          <Posts />
        )}
      </div>
      <div className="md:col-span-3 mt-[35px] lg:mt-0 md:mr-[10px]">
        <RightSideBar />
      </div>
    </div>
  );
}

export default Home;
