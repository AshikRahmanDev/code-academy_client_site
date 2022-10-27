import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-dark h-[98vh] w-[99%] mx-auto rounded-lg mt-2 flex justify-between items-center md:px-16">
      <div className="text-white text-center md:text-start p-3">
        <p>
          <span className="text-yellow-500">Home</span> <span>// 404</span>
        </p>
        <h1 className="text-5xl font-bold normal-case mb-6">
          Page Not <span className="text-yellow-400">Found</span>
        </h1>
        <Link
          to={"/"}
          className="btn bg-yellow-500 text-theme text-lg font-bold hover:text-white"
        >
          Back to Home
        </Link>
      </div>

      <img
        className="hidden md:flex"
        src="https://i.ibb.co/qyKyWwr/404-removebg-preview.png"
        alt="404-removebg-preview"
        border="0"
      ></img>
    </div>
  );
};

export default NotFound;
