import React from "react";
import allData from "../../data/data";
import SectionTitle from "../SectionTitle/SectionTitle";
import react from "../../images/skill/react.svg";



const About = () => {
 
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-5 pt-20 xl:px-24">
        <div className="xl:col-span-3">
          <SectionTitle serial="01" title="About me" />
          <p className=" text-neutral text-md font-normal font-heading ">
            My name is Md. Ferdous. I am a professional Web Designer and
            Developer.I am Working With HTML, CSS, Bootstrap, TailwindCSS,
            <span className="text-primary"> JavaScript, ReactJs,</span> NextJS,
            NodeJS, <span className="text-primary">firebase, </span>
            Netlify, Vercel & Heroku. My Job Is To Build Your Website Functional
            And User-Friendly But At The Same Time Attractive.
            <br /> <br />I am easy to integrate into a team and am responsible
            enough to work with no supervision. My dream is to be a world-class
            programmer. My mission is to learn new technologies.
          </p>
          <p className=" text-neutral text-md font-normal font-heading pt-4">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="pt-4 grid grid-cols-2 w-full md:max-w-sm">
            {allData.technologies.map((technology,index) => (
              <div key={index} className="flex items-center ">
                <span className="text-primary mr-2">&#x022B3;</span>
                <p className="flex items-center text-accent text-xs font-display font-normal ">
                  {technology.title}
                </p>
              </div>
            ))}
          </div>
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
        <div className="xl:col-span-2 mt-10 ">
          <div className="flex justify-center items-center ">
            <img className=" w-28 xl:w-60" src={react} alt="tailwind " />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
