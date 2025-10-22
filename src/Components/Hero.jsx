import React from "react";
import {
  RiCss3Fill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavaFill,
  RiJavascriptFill,
  RiLinkedinBoxFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import linkedInImage from "../assets/linkedinimage.jpg";

const Hero = () => {
  return (
    <div className="flex items-center px-5 pt-12 flex-col gap-12 min-h-[90vh]">
      {/* main div - image and left content */}
      <div className="flex items-center   flex-col md:flex-row mt-14 md:mt-32 gap-6">
        {/* left content - name and bio  */}
        <div className="max-w-[400px]">
          <h1 className="text-3xl md:text-4xl font-bold ">Website Designer & Developer 👋</h1>
          <p className="mt-6 mb-4">
            Hi, I'm Hafiz Husnain Arif. A Passionate Website Developer
            and I help businesses get more clients by building them modern & professional websites. 🚀
          </p>
          <div className="flex text-3xl">
            <a href="https://www.linkedin.com/in/hafiz-husnain-arif-00820a365" target="_blank"><RiLinkedinBoxFill /></a>
            <a href="https://github.com/hussnain-uet-87" target="_blank"><RiGithubFill /></a>
          </div>
        </div>
        {/* right image */}
        <img
          src={linkedInImage}
          alt="personal-image"
          className="-order-1 md:order-1 w-[250px] h-[250px] object-cover object-left border-2  shadow-[0_4px_15px_rgba(0,0,0,0.7)] rounded-[100%]"
        />
      </div>
      <div className="flex items-center md:gap-18 md:ml-[-40px] flex-col md:flex-row justify-center md:mt-12 ">
        <p className="font-semibold md:border-b-0 md:mr-10 md:pr-7 md:border-r-2 pb-1 text-lg border-b-2">Tech Stack </p>
        <div className="flex w-[300px] flex-wrap md:flex-nowrap md:flex-row pt-10 md:pt-0 items-center justify-center gap-10 text-4xl px-6">
          <i className=" devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-javascript-plain colored bg-black"></i>
          <i className="devicon-react-plain colored"></i>
          <i className="devicon-tailwindcss-plain colored"></i>
          <p className="text-3xl font-semibold text-green-600">GSAP</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
