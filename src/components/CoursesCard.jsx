import React from "react";

const CoursesCard = ({ course }) => {
  const { picture } = course;
  return (
    <div className="h-[210px] bg-base-100 shadow-xl rounded-lg p-1">
      <figure>
        <img
          className="w-[100%] h-[170px] rounded-lg"
          src={picture}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
      </div>
    </div>
  );
};

export default CoursesCard;
