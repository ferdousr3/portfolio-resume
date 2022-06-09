import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   const link = `https://drive.google.com/file/d/1A6O8q1IvPQaBBHd0YLRpv4yaKZa11YKq/view?usp=sharing`;
  const name = "<ferdous/>";
  return (
    <>
      <div className="bg-info shadow-8xl">
        <div className="container mx-auto">
          <div className="navbar ">
            <div className="flex-1">
              <Link to="/" className="text-md text-primary font-display ">
                {name}
              </Link>
            </div>
            <div className="flex-none">
              <ul className=" p-0 text-primary rounded-none ">
                {/* <li>
                  <Link className=" font-display text-md" to="/">
                    Portfolio
                  </Link>
                </li> */}
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
      </div>
    </>
  );
};

export default Header;
