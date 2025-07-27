import { ContactRound, LocateFixedIcon, Mail, PhoneCall } from "lucide-react";
import React, { useRef, useState } from "react";
import { contactMethods } from "../assets/assets";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_b8nbtzo",
        "template_5tzj0ad",
        form.current,
        "Sc7cUcLnAlRpr-N8L"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log("Email Sent");

          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <section id="contact" className="px-4 sm:px-20 my-32">
      <div className="text-center">
        <p className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wide px-6 py-2.5 bg-zinc-800 rounded-full shadow-sm">
          <ContactRound className="w-5 h-5 sm:w-6 sm:h-6" />
          Have questions or ideas? Let’s talk!
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
          Get in Touch – Let’s Connect{" "}
        </h2>
      </div>
      {/* Contact Component */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-20">
        <div className="lg:flex-1">
          <div>
            <h1 className="text-xl font-semibold">Contact Information</h1>
            <p className="mt-4 text-sm text-white/85">
              Fill up the form and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <p>
              <Mail className="text-2xl" />
            </p>
            <a href="mailto:ahamedasjad77@gmail.com">
              <p className="font-semibold text-lg">Email</p>
              <p className="text-white/85">ahamedasjad77@gmail.com</p>
            </a>
          </div>
          <div className="mt-4 flex gap-4">
            <p>
              <PhoneCall className="text-2xl" />
            </p>
            <a href="tel:+94761257751">
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-white/85">+94 76 125 7751</p>
            </a>
          </div>
          <div className="mt-4 flex gap-4">
            <p>
              <LocateFixedIcon className="text-2xl" />
            </p>
            <div>
              <p className="font-semibold text-lg">Location</p>
              <p className="text-white/85">Kalutara, Sri Lanka</p>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-xl font-semibold">Connect with me</h1>
            <div className="flex items-center gap-6 mt-8">
              {contactMethods.map((item, index) => (
                <a href={item.link} target="_black" key={index}>
                  <p className="p-2 rounded-full hover:bg-white hover:text-black duration-300 transition-colors">
                    {" "}
                    {item.img}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Email Form */}
        <form
          ref={form}
          
          onSubmit={sendEmail}
          className="w-full lg:flex-2 lg:p-12 p-4 border-2 border-transparent shadow-[0px_4px_8px_2px] "
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1">
              <p className="font-medium ">Your Name</p>
              <input
                name="name"
                type="text"
                required
                placeholder="What's your good name?"
                className="p-4 w-full mt-2 border  rounded-lg outline-none focus:ring-2 ring-mainBlueLight"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium ">Your Email</p>
              <input
                name="email"
                type="email"
                required
                placeholder="What's your email?"
                className="p-4 w-full mt-2 border  rounded-lg  rounded outline-none focus:ring-2 ring-mainBlueLight"
              />
            </div>
          </div>
          <div className="flex-1 mt-4">
            <p className="font-medium">Subject</p>
            <input
              name="subject"
              type="text"
              required
              placeholder="How can I help you?"
              className="p-4 w-full mt-2 border  rounded-lg outline-none focus:ring-2 ring-mainBlueLight"
            />
          </div>
          <div className="flex-1 mt-4">
            <p className="font-medium ">Message</p>
            <textarea
              name="message"
              required
              placeholder="Type your message here..."
              className="p-4 w-full mt-2 border  rounded-lg  rounded outline-none focus:ring-2 ring-mainBlueLight min-h-24 resize-none"
            />
          </div>
          <button
          type="submit"
          disabled={loading}
          className="relative inline-block px-6 py-4 mt-6 w-full rounded-md text-black bg-white border border-transparent overflow-hidden transition-colors duration-300 group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {loading ? "Sending..." : "Send Message"}
          </span>

          <span className="absolute inset-0 bg-black transform -skew-x-12 scale-0 origin-bottom-left transition-transform duration-500 group-hover:scale-150 z-0"></span>

          <span className="absolute inset-0 rounded-md border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
        </button>
          {success && (
            <p className="text-green-500 mt-3 text-sm">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
