import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectContext } from "../App";

const Project = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [project] = useContext(ProjectContext);
  const pro = project.find((proj) => proj.id === id);
  console.log(pro);

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={pro?.img}
            alt={pro?.name}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=" text-neutral">
            <h1 className="text-5xl font-bold text-accent">{pro?.name}</h1>
            <h6 className="text-sm font-display"> {pro?.description}</h6>

            <div className="py-4">
              <span className="text-sm font-semibold font-body text-primary pb-2">
                Uses Technologies
              </span>
              <p className="font-display">{pro?.technologies}</p>
            </div>
            <div className="pt-2">
              <span className=" pb-2 text-sm font-semibold font-body text-primary">
                Overview
              </span>
              <p className="flex">
                <span className="text-primary mr-2">&#x022B3;</span>
                {pro?.firstOverview}
              </p>
              <p className="flex">
                <span className="text-primary mr-2">&#x022B3;</span>
                {pro?.secondOverview}
              </p>
              <p className="flex">
                <span className="text-primary mr-2">&#x022B3;</span>
                {pro?.thirdOverview}
              </p>
            </div>
            <button onClick={()=>navigate('/')} >Back to Project</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
