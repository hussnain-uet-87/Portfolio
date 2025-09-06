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
    <div className="flex items-center  flex-col gap-12 min-h-[90vh]">
      {/* main div - image and left content */}
      <div className="flex items-center mt-32 gap-6">
        {/* left content - name and bio  */}
        <div className="w-[400px]">
          <h1 className="text-4xl font-bold ">Front-End React Developer 👋</h1>
          <p className="mt-6 mb-4">
            Hi, I'm Hafiz Husnain Arif. A Passionate Front-end React Developer
            based in Lahore, Pakistan📍
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
          className="w-[250px] h-[250px] object-cover object-left border-2  shadow-[0_4px_15px_rgba(0,0,0,0.7)] rounded-[100%]"
        />
      </div>
      <div className="flex items-center justify-center mt-12 ">
        <p className="font-semibold pr-7 border-r-2">Tech Stack </p>
        <div className="flex items-center justify-center gap-10 text-4xl px-6">
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-javascript-plain colored bg-black"></i>
          <i className="devicon-react-plain colored"></i>
          <p className="text-3xl font-semibold text-green-600">GSAP</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
