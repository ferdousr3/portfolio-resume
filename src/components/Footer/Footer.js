import data from "../../data/data";
import React from "react";

const Footer = () => {
  const name = "<ferdous/>";
  return (
    <>
      <div className="pt-10 shadow-sm ">
        <div className="container mx-auto py-6 ">
          <h1 className="text-primary text-sm font-display text-center">{name}</h1>
          <div className="flex space-x-6 justify-center py-2">
            {data.footerSocial.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <item.icon className="text-primary text-lg hover:text-success transition-colors duration-300 " />
              </a>
            ))}
          </div>
          <p className="text-center font-display text-neutral text-xs">
            &copy; {new Date().getFullYear()} Proudly Powered by 
            <a className="text-primary ml-2" href="/">
               ferdous
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
