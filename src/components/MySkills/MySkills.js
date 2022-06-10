import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const MySkills = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <SectionTitle serial="01" title="My Skills" />
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 max-w-4xl mx-auto bg-success p-4  rounded-sm ">
            <div className="md:flex pb-3">
              <span className="text-accent text-lg font-semibold  hover:text-primary transition-colors duration-300 -mt-1 mr-2">
                Expertise:
              </span>
              <h1 className=" text-neutral font-display  text-sm">
                HTML5, CSS3, Bootstrap5, JavaScript, ES6, REST API, ReactJS,
                NextJs, React-Router, React- Bootstrap, Authentication, Tailwind
                CSS, And Material UI.
              </h1>
            </div>
            <div className="md:flex pb-3">
              <span className="text-accent text-lg font-semibold  hover:text-primary transition-colors duration-300 -mt-1 mr-2">
                Comfortable:
              </span>
              <h1 className=" text-neutral font-display  text-sm">
                Node JS, MongoDB, Express JS, JWT, And Payment Method.
              </h1>
            </div>
            <div className="md:flex pb-3">
              <span className="text-accent text-lg font-semibold  hover:text-primary transition-colors duration-300 -mt-1 mr-2">
                Familiar:
              </span>
              <h1 className=" text-neutral font-display  text-sm">
                With react Native, React Query, React Hook Form, And Typescript.
              </h1>
            </div>
            <div className="md:flex">
              <span className="text-accent text-lg font-semibold  hover:text-primary transition-colors duration-300 -mt-1 mr-2">
                Tools:
              </span>
              <h1 className=" text-neutral font-display  text-sm">
                GitHub, Firebase, Netlify, Heroku, VS Code, And Chrome Dev Tool
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
