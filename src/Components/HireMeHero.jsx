import React, { useState } from "react";
import contactSVG from "../assets/ContactSVG.svg";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const HireMeHero = () => {
  const [fname, setFname] = useState("");
  const [femail, setFemail] = useState("");
  const [fsubject, setFsubject] = useState("");
  const [fmessage, setFmessage] = useState("");

  const submitHandle = () => {
    setFname("");
    setFemail("");
    setFsubject("");
    setFmessage("");
  };

  return (
    <div id="contact" className="w-[65%] max-w-4xl pb-4 mx-auto pt-16">
      <h2 className="text-left text-xl text-blue-500 font-bold">Hire Me</h2>
      <p className="mt-2 text-xl font-bold">
        “Need a Website for Your Business? I’ve Got You Covered.”
      </p>

      <div className="mt-8 flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 bg-gray-100 p-6 flex flex-col justify-center space-y-6">
          <img src={contactSVG} alt="Contact illustration" />
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-600" />
            <p className="text-gray-700">+92 3110485156</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600" />
            <p className="text-gray-700">hussnainuet87@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaGlobe className="text-blue-600" />
            <p className="text-gray-700">www.hafiz-husnain-arif.vercel.app</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form
          className="md:w-1/2 p-6 space-y-4 bg-white"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const res = await fetch("https://formspree.io/f/manpwqwo", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: fname,
                  email: femail,
                  subject: fsubject,
                  message: fmessage,
                }),
              });

              if (res.ok) {
                alert("Message sent successfully!");
                submitHandle();
              } else {
                alert("Something went wrong. Please try again.");
              }
            } catch (error) {
              alert("An error occurred. Please try again later.");
              console.error(error);
            }
          }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Something to Ask? Feel Free to Drop Your Message
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={femail}
              onChange={(e) => setFemail(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={fsubject}
            onChange={(e) => setFsubject(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={fmessage}
            onChange={(e) => setFmessage(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMeHero;
