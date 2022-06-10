import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const link = `https://drive.google.com/file/d/1A6O8q1IvPQaBBHd0YLRpv4yaKZa11YKq/view?usp=sharing`;
  const name = "<ferdous/>";
  return (
    <>
      <div className="fixed z-20 w-full bg-info shadow-8xl ">
        <div className="navbar bg-info z-20  flex justify-between w-full   max-w-7xl  container mx-auto lg:px-10 ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label
                onClick={() => setOpen(!open)}
                tabIndex="0"
                className="xl:hidden"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                )}
              </label>
              {/* mobile nav link */}
              <ul
                tabIndex="0"
                className={
                  open
                    ? " dropdown-content mt-3 p-4 shadow bg-secondary rounded-box text-sm font-medium text-accent w-80 sm:w-[50rem] mx-auto text-center space-y-1 "
                    : "hidden"
                }
              >
                <li>
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-display text-md"
                        : "hover:text-accent transition-colors duration-300 font-display text-md "
                    }
                    to="/"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-display text-md"
                        : "hover:text-accent transition-colors duration-300 font-display text-md "
                    }
                    onClick={handleClose}
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="rounded-none ">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary rounded-none  py-1 px-4 font-display border border-primary text-sm bg-secondary"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="btn btn-link normal-case ml-1 lg:ml-0 ">
              <span className="text-sm  lg:-ml-5 sm:text-lg flex items-center text-md text-primary font-display">
                {name}
              </span>
            </NavLink>
          </div>
          {/* desktop nav link */}
          <div className=" hidden navbar-end xl:flex">
            <ul className="flex space-x-4 p-0 text-sm font-medium text-accent ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-display text-md"
                      : "hover:text-accent text-primary font-display text-md transition-colors duration-300 "
                  }
                  to="/"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-display text-md"
                      : "hover:text-accent text-primary font-display text-md transition-colors duration-300 "
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="rounded-none ">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary rounded-none  py-1 px-4 font-display border border-primary text-sm bg-secondary"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
