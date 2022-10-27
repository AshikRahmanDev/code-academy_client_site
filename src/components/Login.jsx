import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdEmail, MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Contaxt/AuthProvider";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(null);
  const { googleLogin, githubLogin, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
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

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError("Password must be 6 Character or more");
    }
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(null);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        const err = e.message;
        setError(err);
      });
  };
  return (
    <div className="bg-dark md:h-[92vh] h-[92vh] w-[99%] mx-auto rounded-lg md:grid md:grid-cols-2">
      <div className="mx-auto w-[50%] pt-16 md:pt-0 md:my-auto">
        <h1 className="text-white text-3xl normal-case font-bold">Login</h1>

        <form onSubmit={handleLogin} action="">
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
          <p className="text-red-500">{error}</p>
          <div className="text-center mt-5">
            <input
              className="btn bg-yellow-400/30 w-[200px] hover:bg-yellow-500 border-2 border-yellow-400/50"
              type="submit"
              value="Sign In"
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
