import React from "react";

const HomeContact = () => {
  return (
    <>
      <div className="text-center max-w-lg mx-auto pt-10">
        <h1 className="text-primary font-display text-sm pb-2"> 05. What’s Next?</h1>
        <h2 className="text-5xl py-3 text-accent font-bold">
          Get In Touch
        </h2>
        <p className=" text-neutral text-sm ">
          If you have a question or simply want to say hello, feel free to reach out—I’ll get back to you as soon as I can!
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
