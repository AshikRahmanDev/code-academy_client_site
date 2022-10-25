import React from "react";
import { Link } from "react-router-dom";
import { MdPersonAddAlt, MdOutlineLibraryBooks } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-dark md:h-[92vh] w-[99%] mx-auto rounded-lg flex items-center">
      <div className="grid md:grid-cols-2 w-[95%] mx-auto">
        <div className="md:ml-7 md:mt-7">
          <p className="text-yellow-300">Enjoy Programming With blabla</p>
          <h1 className="text-white text-4xl normal-case font-bold">
            Programming Free Online <br /> Courses Of All Time
          </h1>
          <p className="text-base-100 md:w-[90%] mt-3">
            Learn programming with free online courses from real college courses
            from Harvard, MIT, and more of the world's leading universities.
            Pick up essential coding skills needed for frontend and/or backend
            web development, machine learning, IOS, Android, and much more.
          </p>
          <div className="mt-7">
            <Link className="btn bg-yellow-400/30 hover:bg-yellow-500 border-2 border-yellow-400/50 mr-4">
              Explore Courses
            </Link>
            <Link className="btn bg-transparent border-2 hover:bg-yellow-500 border-yellow-400/50 mr-4">
              Register
            </Link>
          </div>
        </div>

        {/* carousel */}
        <div className="w-[100%] relative hidden md:block">
          <img
            className="w-[100%px]"
            src="https://i.ibb.co/sFHyGRC/banner-model.png"
            alt="banner-model"
            border="0"
          ></img>
          <div className="flex items-center justify-center absolute top-5 left-10 rounded-full w-[150px] h-[150px] bg-yellow-400/50 border-2 border-yellow-400">
            <div className="flex flex-col justify-center items-center text-white font-semibold">
              <MdPersonAddAlt className="text-3xl" />
              <h1 className="text-3xl">1000+</h1>
              <p className="text-lg ">Student</p>
            </div>
          </div>

          <div className="flex items-center justify-center absolute bottom-10 right-5 rounded-full w-[150px] h-[150px] bg-yellow-400/50 border-2 border-yellow-400">
            <div className="flex flex-col justify-center items-center text-white font-semibold">
              <MdOutlineLibraryBooks className="text-3xl" />
              <h1 className="text-3xl">12H</h1>
              <p className="text-lg ">Student care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
