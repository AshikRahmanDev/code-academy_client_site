import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const CoursesCard = ({ singleCourse }) => {
  const { picture, time, rating, course, price, id } = singleCourse;
  return (
    <div className="h-[100%] bg-yellow-400/50 shadow-xl rounded-lg p-2 relative">
      <figure>
        <img
          className="w-[100%] h-[140px] rounded-lg"
          src={picture}
          alt="Movie"
        />
      </figure>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg normal-case font-semibold">{course}</p>
          <p>Price: ${price}</p>
        </div>
        <Link
          to={`/courseDetails/${id}`}
          className="btn mt-2 hover:text-theme border-0 bg-dark"
        >
          View Details
        </Link>
      </div>

      <div className="flex items-center p-2 bg-red-400/70 rounded-2xl w-[90px] absolute top-3 right-3">
        <p className="flex items-center text-white font-semibold">
          <BiTimeFive className="mr-1" /> {time}Hours
        </p>
      </div>
      <div className="flex items-center justify-center p-2 bg-green-500/70 rounded-2xl w-[90px] absolute top-14 right-3">
        <p className="flex items-center text-white font-semibold">
          Rating:{rating}
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
