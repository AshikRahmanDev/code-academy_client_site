import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const courseData = useLoaderData();
  const { course, picture, id } = courseData[0];
  return (
    <div className="bg-dark h-[92vh] w-[99%] mx-auto rounded-lg p-2 flex items-center justify-around">
      <div className="p-4">
        <img className="rounded-lg h-[300px] " src={picture} alt="" />
        <p className="text-xl text-white">{course}</p>
        <p className="text-xl text-white">Product Id: {id}</p>

        <div className="bg-green-400/40 h-[59px] rounded-lg my-3 flex items-center justify-between p-3">
          <p className="text-white text-xl font-bold normal-case">
            Successfully Enroll
          </p>
          <p className="btn bg-green-500  border-0">Start Now</p>
        </div>
      </div>

      <img
        className="hidden md:flex"
        src="https://i.ibb.co/xYZRnxS/success-removebg-preview.png"
        alt="success-removebg-preview"
        border="0"
      ></img>
    </div>
  );
};

export default Checkout;
