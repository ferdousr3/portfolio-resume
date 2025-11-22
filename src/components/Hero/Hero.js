import React from 'react';
import HeroRight from '../HeroRight/HeroRight';
import { BsDownload, BsFillPinMapFill } from 'react-icons/bs'
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import allData from '../../data/data';

const Hero = () => {
  const link = `https://drive.google.com/file/d/1A6O8q1IvPQaBBHd0YLRpv4yaKZa11YKq/view?usp=sharing`;

  return (
    <>
      <div className="hero pt-24 lg:pt-0 lg:min-h-screen ">
        <div className="hero-content grid grid-cols-1 xl:grid-cols-7 xl:px-10 xl:gap-10">
          <div className="xl:col-span-4">
            {/* <h1 className=" text-base font-normal text-primary pb-2 font-display">
              Hi, my name is
            </h1>
            <h1 className=" text-xl md:text-4xl lg:text-6xl font-bold text-accent xl:leading-tight ">
              ferdous. <br /> I am a Web Developer{" "}
            </h1> */}
            <p className="py-6 text-neutral font-body">
              {allData.details}
            </p>
            <div className='flex items-center text-neutral mb-4'>
              <BsFillPinMapFill className="text-primary mr-2" /> <p>Rajshahi, Bangladesh.</p>
            </div>
            <div className="flex space-x-6 items-center py-2">
              {allData.footerSocial.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noreferrer">
                  <item.icon className="text-primary text-lg hover:text-success transition-colors duration-300 " />
                </a>
              ))}
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className=" max-w-[130px] flex items-center justify-center text-primary border border-primary py-1 px-4 font-display text-sm hover:bg-secondary transition-colors duration-300 "
              >
                Resume <BsDownload className="ml-2 -mt-1 font-extrabold" />
              </a>
            </div>
          </div>
          <div className=" relative  hidden xl:block xl:col-span-3  mx-auto  xl:ml-auto">
            <HeroRight />

            <div className=" absolute -top-20 w-full ">
              <BackgroundAnimation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;