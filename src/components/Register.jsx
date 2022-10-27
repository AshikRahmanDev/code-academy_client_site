import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaUser, FaLink } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contaxt/AuthProvider";

const Register = () => {
  const [error, setError] = useState(null);
  const { register, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const ProfileData = { displayName: name, photoURL: photo };

    if (password.length < 6) {
      return setError("Password must be 6 Character or more");
    }

    if (password !== confirm) {
      return setError("Password must be same");
    } else {
      register(email, password)
        .then((result) => {
          const user = result.user;

          updateUserProfile(ProfileData)
            .then(() => {})
            .catch((e) => console.log(e));

          navigate("/");
          console.log(user);
        })
        .catch((e) => {
          setError(e.message);
        });

      form.reset();
    }
  };
  return (
    <div className="bg-dark md:h-[92vh] h-[92vh] w-[99%] mx-auto rounded-lg md:grid md:grid-cols-2">
      <div className="mx-auto w-[50%] pt-16 md:pt-0 md:my-auto">
        <h1 className="text-white text-3xl normal-case font-bold">Sign Up</h1>

        <form onSubmit={handleSubmit} action="">
          <div className="mt-5 flex items-center border-b text-white">
            <FaUser />
            <input
              className="bg-transparent ml-2 outline-none p-2 w-[90%]"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mt-5 flex items-center border-b text-white">
            <FaLink />
            <input
              className="bg-transparent ml-2 outline-none p-2 w-[90%]"
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </div>
          <div className="mt-5 flex items-center border-b text-white">
            <MdEmail />
            <input
              className="bg-transparent ml-2 outline-none p-2 w-[90%]"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mt-5 flex items-center border-b text-white">
            <MdPassword />
            <input
              className="bg-transparent ml-2 outline-none p-2 w-[90%]"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mt-5 flex items-center border-b text-white">
            <MdPassword />
            <input
              className="bg-transparent ml-2 outline-none p-2 w-[90%]"
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
            />
          </div>
          <p className="text-red-500">{error}</p>
          <div className="text-center mt-5">
            <input
              className="btn bg-yellow-400/30 w-[200px] hover:bg-yellow-500 border-2 border-yellow-400/50"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
        <div className="text-center text-white mt-3">
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="text-yellow-300">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
      <img
        className="hidden md:flex my-auto"
        src="https://i.ibb.co/JxQKwwk/login-removebg-preview.png"
        alt="login-removebg-preview"
        border="0"
      ></img>
    </div>
  );
};

export default Register;
