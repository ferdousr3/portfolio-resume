import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { useForm } from "react-hook-form";
import { FaMapMarkedAlt, FaPhoneVolume, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2orwntp",
        "template_b2gddut",
        form.current,
        "_zZFqf0Bzd-f3LG2l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-control">
                  <label className="label label-text text-accent">Name</label>
                  <input
                    placeholder="Your Name"
                    className="input input-bordered bg-transparent text-accent border-primary rounded-none"
                    type="text"
                    name="user_name"
                  />
                </div>
                <div className="form-control">
                  <label className="label label-text text-accent">Email</label>
                  <input
                    className="input input-bordered bg-transparent text-accent border-primary rounded-none"
                    type="email"
                    name="user_email"
                    placeholder="exmp@mail.com"
                  />
                </div>
                <div className="form-control">
                  <label className="label label-text text-accent">
                    Message
                  </label>
                  <textarea
                    rows="40"
                    cols="5"
                    placeholder="Your Message"
                    className="input input-bordered bg-transparent text-accent border-primary rounded-none"
                    name="message"
                  />
                </div>
                <div className="form-control mt-4">
                  <input
                    className="text-primary border border-primary py-3 px-4 font-display text-sm hover:bg-secondary transition-colors duration-300"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>

              {/* <form onSubmit={handleSubmit(sendEmail)}>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-accent">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-accent input input-bordered bg-transparent border-primary rounded-none"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                      minLength: {
                        value: 2,
                        message: "Must be 2 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "minLength" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
               
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-accent">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="exmp@mail.com"
                    className="text-accent input input-bordered bg-transparent border-primary rounded-none"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is Required",
                      },
                      minLength: {
                        value: 2,
                        message: "Must be 2 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "minLength" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-accent">Message</span>
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    placeholder="Description"
                    className="text-accent input input-bordered bg-transparent border-primary rounded-none"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Message is Required",
                      },
                      minLength: {
                        value: 5,
                        message: "Must be 3 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.message?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.message.message}
                      </span>
                    )}
                    {errors.message?.type === "minLength" && (
                      <span className="label-text-alt text-red-600">
                        {errors.message.message}
                      </span>
                    )}
                  </label>
                </div>

                <input
                  type="submit"
                  value="Send Message"
                  className="text-primary border border-primary py-3 px-4 font-display text-sm hover:bg-secondary transition-colors duration-300 mx-auto w-full"
                />
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
