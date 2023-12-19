import React from "react";
import { Link } from "react-router-dom";
import bgimg from "./bgimg.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div
        className="h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <Navbar />
        <div className="flex-grow flex items-center justify-start">
          <div>
            <div className="ml-5 text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              <div className="text-white font-bold">
                "Yoga is the journey of
              </div>
              <div className="text-yellow-500 font-bold">The Self</div>
              <div className="text-yellow-500 font-bold">To The Self</div>
              <div className="text-yellow-500 font-bold">Through The Self"</div>
            </div>
            <div className="ml-5 mb-5 mt-10">
              <Link
                to="/register"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
