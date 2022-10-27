import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CoursesDetails = () => {
  const courseData = useLoaderData();
  const { title, price, id, overview, details, picture } = courseData[0];
  const ref = React.createRef();
  return (
    <div className="bg-dark h-[100%] md:h-[92vh] w-[99%] mx-auto rounded-lg p-2 grid grid-cols-5">
      <div className="text-white normal-case col-span-3 mt-5 ml-7">
        <div className="flex">
          <h1 className="text-5xl font-bold text-yellow-500">{title}</h1>
        </div>
        <img className="hidden" src={picture} alt="" />

        <p className="w-[90%] my-5">{details}</p>
        <p>Last Updated 9/2015</p>
        <div>
          <h3 className="text-2xl font-bold">What you'll learn</h3>
          {overview.map((bulletPoint) => (
            <li>{bulletPoint}</li>
          ))}
        </div>
      </div>

      <div ref={ref} className="border-yellow-500 border col-span-2 p-3">
        <img className="w-[100%] rounded-lg " src={picture} alt="" />
        <p className="text-yellow-500 text-2xl font-bold normal-case">
          {title}
        </p>
        <div className="bg-yellow-500/40 h-[59px] rounded-lg my-3 flex items-center justify-between p-3">
          <p className="text-white text-xl font-bold normal-case">$ {price}</p>
          <Link
            to={`/checkout/${id}`}
            className="btn bg-yellow-500/75  border-0"
          >
            Get premium access
          </Link>
        </div>
        <div className="text-white">
          <p>
            <small>{details}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
