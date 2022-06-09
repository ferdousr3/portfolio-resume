import React from 'react';
import { FaRegFolderOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({project}) => {
  return (
    <>
      <div className="bg-success py-6 px-8 ">
        {/* <FaRegFolderOpen className="text-primary text-xl" /> */}
        <img
          className=" w-80 h-72 pt-2 "
          src={project.img}
          alt={project.name}
        />
        <div className="pt-4">
          <h1 className="text-primary font-semibold text-lg ">
            {project.name}
          </h1>
          <h6 className="text-accent text-sm font-medium pt-4 pb-3">
            {project.description}...
          </h6>
          <p className="text-accent font-display text-xs font-normal">
            {project.technologies}
          </p>
        </div>
        <div className=" flex md:flex pt-4 space-x-4">
          <a
            className="text-sm font-display text-accent flex items-center"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="hidden md:block">website</span>
            <FaExternalLinkAlt className=" ml-2 text-primary font-light hover:text-neutral transition-colors duration-300" />
          </a>
          <a
            className="text-sm font-display text-accent flex items-center"
            href={project?.clientLink}
            target="_blank"
            rel="noreferrer"
          >
            client
            <FaGithub className=" ml-2 text-primary font-light hover:text-neutral transition-colors duration-300" />
          </a>
          <a
            className="text-sm font-display text-accent flex items-center"
            href={project?.serverLink}
            target="_blank"
            rel="noreferrer"
          >
            server
            <FaGithub className=" ml-2 text-primary font-light hover:text-neutral transition-colors duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;