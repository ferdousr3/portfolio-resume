
import React from "react";
import allData from "../../data/data";
import SectionTitle from "../SectionTitle/SectionTitle";

const Education = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <SectionTitle serial="03" title="Education & Courses" />
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 max-w-4xl mx-auto  p-4  rounded-sm ">
            {allData.educations.map((education, index) => (
              <div className="md:flex pb-4">
                <span className="mr-24 text-primary text-sm font-normal capitalize min-w-[100px]   hover:text-primary transition-colors duration-300 ">
                  {education.name}
                </span>
                <div className="div">
                  <h1 className="text-primary font-display text-sm pb-1 uppercase  ">
                    {education.title}
                  </h1>
                  <h2 className="text-accent font-display text-sm pb-1">
                    <span className="text-primary" >@</span> {education.institute}
                  </h2>
                  <h3 className=" font-display text-xs font-semibold text-primary pb-1">
                    {education.date}
                  </h3>
                  <p className="text-neutral font-display  text-sm font-medium ">
                    <span className="text-primary">&#x022B3; </span>
                    {education.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;