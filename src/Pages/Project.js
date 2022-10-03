import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectContext } from "../App";
import {  FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const Project = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project] = useContext(ProjectContext);
  const pro = project.find((proj) => proj.id === id);

  return (
    <>
      <div className="hero pt-24 min-h-screen ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <img
              src={pro?.img}
              alt={pro?.name}
              className=" xl:max-w-xl  rounded-lg shadow-2xl"
            />
          </div>
          <div className=" lg:col-span-2 text-neutral">
            <h1 className="text-5xl font-bold text-accent">{pro?.name}</h1>
            <h6 className="text-sm font-display"> {pro?.description}</h6>

            <div className="pt-2 ">
              <span className="text-sm font-semibold font-body text-primary pb-4 ">
                Links
              </span>
              <div className="flex space-x-4 ">
                <p className="flex items-center text-sm font-medium">
                  Website
                  <a href={pro?.link}>
                    <FaExternalLinkAlt className="text-primary ml-2 -mt-1" />
                  </a>
                </p>
                <p className="flex items-center text-sm font-medium">
                  Client
                  <a href={pro?.link}>
                    <FaGithub className="text-primary ml-2 -mt-1" />
                  </a>
                </p>
                <p className="flex items-center text-sm font-medium">
                  Server
                  <a href={pro?.link}>
                    <FaGithub className="text-primary ml-2 -mt-1" />
                  </a>
                </p>
              </div>
            </div>
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
            <button
              className=" flex items-center justify-center text-primary border-0  py-3  font-display text-sm  "
              onClick={() => navigate("/")}
            >
               Back to Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
