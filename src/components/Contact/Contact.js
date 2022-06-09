import React from 'react';
import { FaMapMarkedAlt, FaPhoneVolume, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="hero mx-auto xl:px-6">
        <div className="hero-content grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2">
          <div className="text-center lg:text-left xl:pr-8">
            <h1 className="text-5xl font-bold text-accent">
              Do you have Any Project? Please leave a Message.
            </h1>
            <p className="py-6 text-sm font-display text-accent">
              let me know how i can help. you may Fill out the form and I'll be
              in touch as soon as possible.
            </p>
            <div className="div">
              <div className="flex pb-4 items-center">
                <FaMapMarkedAlt className="text-primary text-xl mr-4" />
                <p className="text-sm font-display text-accent">
                  Rajshahi, Bangladesh
                </p>
              </div>
              <div className="flex pb-4 items-center">
                <FaPhoneVolume className="text-primary text-xl mr-4" />
                <p className="text-sm font-display text-accent">
                  +880 1724507149
                </p>
              </div>
              <div className="flex pb-4 items-center">
                <FaMailBulk className="text-primary text-xl mr-4" />
                <p className="text-sm font-display text-accent">
                  ferdousr1992@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="card rounded-sm  w-full max-w-lg shadow-2xl bg-success">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered bg-transparent text-accent border-primary rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="exmp@mail.com"
                  className=" text-accent input input-bordered bg-transparent border-primary rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className=" text-accent input input-bordered bg-transparent border-primary rounded-none"
                />
              </div>
              <div className="form-control mt-6">
                <button className=" text-primary border border-primary py-3 px-4 font-display text-sm hover:bg-secondary transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;