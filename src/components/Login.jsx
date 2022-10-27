import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Contaxt/AuthProvider";

const Login = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };

  const handleGitHubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="bg-dark md:h-[92vh] h-[92vh] w-[99%] mx-auto rounded-lg md:grid md:grid-cols-2">
      <div className="mx-auto w-[50%] pt-16 md:pt-0 md:my-auto">
        <h1 className="text-white text-3xl normal-case font-bold">Login</h1>

        <form action="">
          <div className="mt-5 flex items-center border-b text-white">
            <MdEmail />
            <input
              className="bg-transparent ml-2 outline-none p-2 w-[90%]"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mt-5 flex items-center border-b text-white">
            <MdPassword />
            <input
              className="bg-transparent ml-2 outline-none p-2 w-[90%]"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
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
            Don't have an account?{" "}
            <Link to={"/register"} className="text-yellow-300">
              Register
            </Link>{" "}
          </p>
          <p>-or login with-</p>

          <div className="flex justify-center mt-3">
            <p
              onClick={handleGoogleLogin}
              className="btn bg-white hover:bg-white text-theme font-bold mx-2 normal-case"
            >
              <FcGoogle className="text-xl mr-1" />
              Google
            </p>

            <p
              onClick={handleGitHubLogin}
              className="btn bg-white hover:bg-white text-theme font-bold mx-2 normal-case"
            >
              <FaGithub className="text-xl mr-1" />
              GitHub
            </p>
          </div>
        </div>
      </div>
      <img
        className="my-auto hidden md:flex"
        src="https://i.ibb.co/r0ZHqJj/register-removebg-preview.png"
        alt="register-removebg-preview"
        border="0"
      ></img>
    </div>
  );
};

export default Login;
