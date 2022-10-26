import React from "react";
import { Link } from "react-router-dom";

const CoursesSideBar = ({ courses }) => {
  return (
    <div className="bg-yellow-400/50 h-[100%] rounded-lg">
      <h1 className="text-2xl text-center text-white pt-2 normal-case font-semibold">
        Courses
      </h1>
      <div className="w-[90%] mx-auto mt-5">
        {courses.map((courses, idx) => (
          <Link
            to={courses.id}
            className="btn w-[100%] my-2 bg-dark hover:bg-yellow-500/60 hover:border-2 border-0"
            key={idx}
          >
            <p>{courses.course}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesSideBar;
