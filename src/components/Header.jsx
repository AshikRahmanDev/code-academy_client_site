import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex bg-base-100 justify-between">
      <div className="flex">
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>

      <div className="hidden md:block">
        <Link className="btn btn-ghost mx-3 normal-case text-lg">Courses</Link>
        <Link className="btn btn-ghost mx-3 normal-case text-lg">FAQ</Link>
        <Link className="btn btn-ghost mx-3 normal-case text-lg">Blog</Link>
      </div>
      <div className="hidden md:block">
        <Link className="btn btn-ghost mx-3 normal-case text-lg">Login</Link>
        <Link className="btn btn-ghost mx-3 normal-case text-lg">Register</Link>
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-square btn-ghost ">
          <GiHamburgerMenu className="text-xl" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
