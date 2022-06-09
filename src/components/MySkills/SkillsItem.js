import React from "react";

const SkillsItem = ({ title, description }) => {
  return (
    <>
      <div className="mb-6 max-w-4xl mx-auto bg-success p-4 flex rounded-sm ">
        <h1 className="text-accent text-lg mb-4 font-semibold  hover:text-primary transition-colors duration-300">
          {title}:
        </h1>
        <p className="text-neutral font-display  text-sm ">{description}</p>
      </div>
    </>
  );
};

export default SkillsItem;
