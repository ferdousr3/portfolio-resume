import data from "../../data/data";
import React from "react";

const Footer = () => {
  const name = "<ferdous/>";
  return (
    <>
      <div className="bg-info shadow-sm border-t border-t-neutral">
        <div className="container mx-auto py-4">
          <h1 className="text-primary font-display text-center">{name}</h1>
          <div className="flex space-x-6 justify-center py-2">
            {data.footerSocial.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <item.icon className="text-primary text-lg hover:text-success transition-colors duration-300 " />
              </a>
            ))}
          </div>
          <p className="text-center font-body text-neutral text-sm">
            &copy; {new Date().getFullYear()} Proudly Powered by
            <a className="my-font-color" href="/">
              ferdous
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
