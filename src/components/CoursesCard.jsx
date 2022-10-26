import React from "react";

const CoursesCard = ({ course }) => {
  const { picture } = course;
  return (
    <div className="div flex h-[210px] bg-base-100 shadow-xl rounded-xl">
      <figure>
        <img src={picture} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
