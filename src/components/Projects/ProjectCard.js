import React from 'react';
import { FaRegFolderOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()
  const {
    id,
    projectType,
    firstOverview,
    name,
    img,
    description,
    technologies,
    link,
    clientLink,
    serverLink,
  } = project;

  return (
    <>
      <div className=" rounded-md  lg:grid lg:grid-cols-5 xl:grid-cols-6 gap-0  ">
        {/* <figure className="min-w-[10rem] project-img shadow-sm  rounded-md lg:col-span-2 xl:col-span-3 ">
          <a href={link} target="_blank" rel="noreferrer">
            <img className=" h-80 w-full rounded-md  " src={img} alt={name} />
          </a>
        </figure> */}
        <div className="py-4 px-8  lg:col-span-5 xl:col-span-6 ">
          <div>
            {/* <h1 className="text-primary font-light font-display text-sm ">
              {projectType} Project
            </h1> */}
            <h2 className=" text-accent font-bold font-display text-xl pt-1">
              {name}
            </h2>
            <div className="pt-3 space-x-4">
              <div className="flex space-x-4">
                <a
                  className="text-sm font-display text-accent flex items-center"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="hidden md:block">website</span>
                  <FaExternalLinkAlt className=" ml-2 text-primary font-light hover:text-neutral transition-colors duration-300" />
                </a>
              </div>
            </div>
            <div className="md:py-2 m-0 my-2  rounded-md">
              <h5 className="text-accent text-base  ">{description}</h5>
              <h6 className="text-accent text-base pb-3 ">{firstOverview}</h6>
            </div>
            <p className="text-accent font-display text-xs font-normal">
              {technologies.slice(0, 100)}...
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectCard;