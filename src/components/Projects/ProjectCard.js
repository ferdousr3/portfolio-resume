import React from 'react';
import { FaRegFolderOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({project}) => {
  const navigate = useNavigate()
  const {id,name,img,description,technologies,link,clientLink,serverLink} = project
  
  return (
    <>
      <div className="bg-success rounded-md card shadow-xl  ">
        {/* <FaRegFolderOpen className="text-primary text-xl" /> */}

        <figure>
          <img className=" h-64  w-full" src={img} alt={name} />
        </figure>
        <div className="py-4 px-8">
          <div className="">
            <h1 className="text-primary font-semibold text-lg ">{name}</h1>
            <h6 className="text-accent text-sm font-medium pt-4 pb-3">
              {description}...
            </h6>
            <p className="text-accent font-display text-xs font-normal">
              {technologies}
            </p>
          </div>
          <div className=" flex md:flex pt-4 space-x-4">
            <a
              className="text-sm font-display text-accent flex items-center"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="hidden md:block">website</span>
              <FaExternalLinkAlt className=" ml-2 text-primary font-light hover:text-neutral transition-colors duration-300" />
            </a>
            <a
              className="text-sm font-display text-accent flex items-center"
              href={clientLink}
              target="_blank"
              rel="noreferrer"
            >
              client
              <FaGithub className=" ml-2 text-primary font-light hover:text-neutral transition-colors duration-300" />
            </a>
            <a
              className="text-sm font-display text-accent flex items-center"
              href={serverLink}
              target="_blank"
              rel="noreferrer"
            >
              server
              <FaGithub className=" ml-2 text-primary font-light hover:text-neutral transition-colors duration-300" />
            </a>
          </div>
          <div className="mt-2">
            <button
              className="text-accent text-sm flex items-center font-display "
              onClick={() => navigate(`/project/${id}`)}
            >
             Project Details <FaRegFolderOpen  className='ml-2 text-primary' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;