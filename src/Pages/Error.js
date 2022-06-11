import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container pt-24 xl:pt-48 h-screen max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 font-heading">
        <div className="col-span-1">
          <h1 className="text-5xl font-extrabold text-accent  ">404</h1>
        </div>
        <div className="col-span-4 border-l md:border-l-primary md:pl-5">
          <h1 className="text-5xl font-extrabold  text-accent  ">
            Page not Found
          </h1>
          <p className="pt-1 text-neutral text-md font-normal">
            Please check the URL in the address bar and try again
          </p>
          <div className="mt-3">
            <button
              className=" bg-transparent text-primary py-2.5 px-8 rounded-3xl border border-primary text-[14px] font-normal hover:bg-secondary transition-colors duration-500"
              onClick={() => navigate("/")}
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
