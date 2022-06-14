import React from "react";

const HomeContact = () => {
  return (
    <>
      <div className="text-center max-w-lg mx-auto pt-10">
        <h1 className="text-primary font-display text-sm pb-2"> 04. What’s Next?</h1>
        <h2 className="text-5xl py-3 text-accent font-bold">
          Get In Touch
        </h2>
        <p className=" text-neutral text-sm ">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="flex justify-center mt-3">
          <button
            className="  flex items-center justify-center text-primary border border-primary py-2 px-8 font-display text-sm hover:bg-secondary transition-colors duration-300"
            onClick={() => window.open("mailto:ferdousr1992@gmail.com")}
          >
            Mail Me
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
