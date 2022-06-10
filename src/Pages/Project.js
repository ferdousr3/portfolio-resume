import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../App';

const Project = () => {
  const {id} = useParams()
  const [project] = useContext(ProjectContext)
  const pro = project.find((proj) => project.id === id);

  return (
    <>
      <div className=" h-screen pt-24 ">
        Details :{id}
        <h1>
          use
          {pro?.name}
        </h1>
      </div>
    </>
  );
};

export default Project;