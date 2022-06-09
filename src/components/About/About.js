import React from "react";
import allData from "../../data/data";
import SectionTitle from "../SectionTitle/SectionTitle";
import tailwind from '../../images/skill/tailwind.svg'
import react from '../../images/skill/react.svg'
import mongodb from '../../images/skill/mongodb.svg'
import NodeJS from '../../images/skill/nodejs.svg'

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-5">
        <div className="xl:col-span-2 flex items-end justify-center pb-10 lb-pb-0">
          <div className="grid grid-cols-2 gap-5">
            <img className=" w-28 xl:w-32" src={react} alt="tailwind " />
            <img className=" w-28 xl:w-32" src={mongodb} alt="tailwind " />
            <img className=" w-28 xl:w-32" src={tailwind} alt="tailwind " />
            <img className=" w-28 xl:w-32" src={NodeJS} alt="tailwind " />
          </div>
        </div>
        <div className="xl:col-span-3">
          <SectionTitle serial="01" title="About me" />
          <p className=" text-neutral text-md font-normal xl:mr-24">
            My name is Md. Ferdous. I am a professional Web Designer and
            Developer.I am Working With HTML, CSS, Bootstrap, TailwindCSS,
            JavaScript, Reactjs, NextJS, NodeJS, firebase, Netlify, Vercel &
            Heroku. My Job Is To Build Your Website Functional And User-Friendly
            But At The Same Time Attractive. I am easy to integrate into a team
            and am responsible enough to work with no supervision. My dream is
            to be a world-class programmer. My mission is to learn new
            technologies.
          </p>
          <div className="flex space-x-4 my-6 ">
            {allData.footerSocial.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <item.icon className="text-primary text-xl hover:text-success transition-colors duration-300 " />
              </a>
            ))}
          </div>
          <div className="mt-4">
            <button
              className="  flex items-center justify-center text-primary border border-primary py-2 px-8 font-display text-sm hover:bg-secondary transition-colors duration-300"
              onClick={() => window.open("mailto:ferdousr1992@gmail.com")}
            >
              Mail Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
