import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";
import CoursesSideBar from "./CoursesSideBar";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid md:grid-cols-10 gap-4 bg-dark h-[100%] md:h-[92vh] w-[99%] mx-auto rounded-lg text-white p-10">
      <div className="md:col-span-2">
        <CoursesSideBar courses={courses} />
      </div>

      {/* courses part  */}
      <div className="md:col-span-8">
        <h1 className="text-2xl">Explore Our Courses</h1>
        <div className="grid grid-flow-col-1 md:grid-cols-3 gap-4 mt-5">
          {courses.map((singleCourse) => (
            <CoursesCard key={singleCourse.id} singleCourse={singleCourse} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
