import allData from "../../data/data";
import React from "react";
import { FaExternalLinkAlt, FaGithub, FaRegFolder } from "react-icons/fa";

const OthersProject = () => {
  return (
    <>
      <div className="">
        <h2 className="text-accent text-3xl font-body font-[600] text-center pb-20">
          Others Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-5xl mx-auto  ">
        {allData.othersProject.map((item) => (
          <div key={item.id} className="md:bg-secondary rounded-md px-8 py-6">
            <div className=" flex justify-between items-center ">
              <FaRegFolder className="text-2xl text-primary" />
              <div className="flex justify-center items-center ">
                <a href={item.liveLink} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt className="text-neutral font-light hover:text-primary transition-colors duration-300 mx-2" />
                </a>
                <a href={item.gitLink} target="_blank" rel="noreferrer">
                  <FaGithub className="text-neutral font-light hover:text-primary transition-colors duration-300 mx-2" />
                </a>
              </div>
            </div>
            <div className="div">
              <div className="min-h-[10rem]">
                <h1 className="text-accent text-lg font-body font-[600]  pb-3 pt-4">
                  {item.name}
                </h1>
                <h6 className="text-accent text-sm font-body font-[400]  pb-3 ">
                  {item.description}
                </h6>
              </div>
              <p className="text-accent text-xs font-display font-[400]  pb-3 pt-4">
                {item.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OthersProject;
