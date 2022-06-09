import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
              <ul className="menu menu-horizontal p-0 text-primary">
                <li>
                  <Link className=" font-display text-md" to="/">
                    Portfolio
                  </Link>
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
