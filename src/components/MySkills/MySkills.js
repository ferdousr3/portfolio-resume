import React from "react";
import allData from "../../data/data";
import SectionTitle from "../SectionTitle/SectionTitle";

const MySkills = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <SectionTitle serial="01" title="My Skills" />
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 max-w-4xl mx-auto  p-4  rounded-sm ">
            {allData.skills.map((skill, index) => (
              <div className="md:flex pb-4">
                <span className="mr-24 text-primary text-lg font-normal min-w-[100px]   hover:text-primary transition-colors duration-300 ">
                  {skill.title}
                </span>
                <p className="text-neutral font-display  text-sm font-medium ">
                  <span className="text-primary">&#x022B3; </span>
                 {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
