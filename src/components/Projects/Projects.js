import React from 'react';
import useProject from '../../hooks/useProject';
// import { FaRegFolderOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects] = useProject([])
  return (
    <>
      <div className="">
        <h1 className="text-accent text-3xl font-body font-[600] text-center pb-20">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;