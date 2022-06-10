import React from 'react';
import { Navigate } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
      <div className="container pt-24 pb-5 max-w-3xl mx-auto h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 font-heading">
          <div className="col-span-1">
            <h1 className="text-5xl font-extrabold text-accent">Blogs</h1>
          </div>
          <div className="col-span-4">
            <h1 className="text-5xl font-extrabold  text-accent  ">
              Coming Soon.......
            </h1>
            <div className="mt-3">
              <button
                className=" bg-transparent text-primary py-2.5 px-8 rounded-3xl border border-primary text-[14px] font-normal hover:bg-secondary transition-colors duration-500"
                onClick={() => Navigate("/")}
              >
                Go back home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;