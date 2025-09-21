import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
import { RiGithubFill, RiArrowRightUpLine } from "react-icons/ri";
import ProjectsData from "../Constants/ProjectsData";
const Projects = () => {
  return (
    <>
      <div className=" w-[65%] mb-20">
        <h2 className="text-left text-xl text-blue-500 font-bold">Portfolio</h2>
        <p className="mt-2 text-xl font-bold">
          Each Project is a Unique piece of Development🧩
        </p>
      </div>
      <div >
        {/* project format*/}
        {ProjectsData.map((Projects,index)=>(

            <div key={index} className={`flex mb-40 flex-col lg:flex-row px-2 gap-8
             ${index%2 === 1 ? "lg:flex-row-reverse" : ""}`}>
          <img

            src={Projects.imageSrc}
            className="w-[300px] sm:w-[350px] lg:w-[600px] rounded-xl object-cover object-center  shadow-xl"
            alt=""
            />
          <div className="w-[300px] sm:w-[400px]">
            <h2 className="font-bold text-2xl text-center underline">
              {Projects.Pname}
            </h2>

            <p className="font-semibold mt-4 tracking-wide">
             {Projects.description}
            </p>
            <div className="flex gap-12 mt-6 font-semibold text-lg items-center justify-center">
              <a href={Projects.githubCode} target="_blank" className="flex items-center justify-center gap-1">
                <RiGithubFill className="text-3xl" /> Code
              </a>
              <a href={Projects.liveDemo} target="_blank" className="flex items-center justify-center gap-1">
                Live Demo <RiArrowRightUpLine className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
