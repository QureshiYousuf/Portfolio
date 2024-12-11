import React from "react";
import { FaReact, FaNode, FaPython } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandRedux,
  TbApi,
  TbBrandNpm,
} from "react-icons/tb";
import {
  SiRedux,
  SiTailwindcss,
  SiTestinglibrary,
  SiJest,
  SiJirasoftware,
  SiMongodb,
  SiExpress,
  SiAzuredevops,
} from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa6";
import { VscJson } from "react-icons/vsc";
import { BsBootstrapFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Skills = () => {
  const skills = [
    { title: "React JS", icon: <FaReact className="text-cyan-600" /> },
    {
      title: "Javascript ES6",
      icon: <TbBrandJavascript className="text-yellow-500" />,
    },
    {
      title: "React Redux",
      icon: <TbBrandRedux className="text-purple-500" />,
    },
    { title: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    {
      title: "Redux Toolkit Query",
      icon: <BiLogoRedux className="text-purple-600" />,
    },
    { title: "Redux Thunk" },
    { title: "HTML5", icon: <TiHtml5 className="text-orange-500" /> },
    { title: "CSS3", icon: <IoLogoCss3 className="text-blue-600" /> },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-300" />,
    },
    { title: "GIT", icon: <FaGitAlt /> },
    {
      title: "React Testing Library",
      icon: <SiTestinglibrary className="text-red-500" />,
    },
    { title: "JEST", icon: <SiJest className="text-orange-600" /> },
    { title: "JIRA", icon: <SiJirasoftware className="text-blue-600" /> },
    { title: "RESTful APIs", icon: <TbApi /> },
    { title: "Node JS", icon: <FaNode className="text-green-500" /> },
    {
      title: "Express JS",
      icon: <SiExpress className="text-gray-900 font-bold" />,
    },
    { title: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { title: "JSON", icon: <VscJson /> },
    {
      title: "Azure DEVOPs",
      icon: <SiAzuredevops className="text-blue-500" />,
    },
    { title: "NPM", icon: <TbBrandNpm className="text-red-600" /> },
    {
      title: "Bootstrap",
      icon: <BsBootstrapFill className="text-violet-600" />,
    },
  ];
  const skillSet = {
    coreSkills: [
      { title: "React JS", icon: <FaReact className="text-cyan-600" /> },
      {
        title: "Javascript ES6",
        icon: <TbBrandJavascript className="text-yellow-500" />,
      },
      {
        title: "React Redux",
        icon: <TbBrandRedux className="text-purple-500" />,
      },
      { title: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      {
        title: "Redux Toolkit Query",
        icon: <BiLogoRedux className="text-purple-600" />,
      },
      { title: "Redux Thunk" },
      { title: "HTML5", icon: <TiHtml5 className="text-orange-500" /> },
      { title: "CSS3", icon: <IoLogoCss3 className="text-blue-600" /> },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-300" />,
      },
    ],
    otherSkills: [
      { title: "GIT", icon: <FaGitAlt /> },
      {
        title: "React Testing Library",
        icon: <SiTestinglibrary className="text-red-500" />,
      },
      { title: "JEST", icon: <SiJest className="text-orange-600" /> },
      { title: "JIRA", icon: <SiJirasoftware className="text-blue-600" /> },
      {
        title: "Python Basics",
        icon: <FaPython className="text-green-600" />,
      },
      { title: "RESTful APIs", icon: <TbApi /> },
      { title: "Node JS", icon: <FaNode className="text-green-500" /> },
      {
        title: "Express JS",
        icon: <SiExpress className="text-gray-900 font-bold" />,
      },
      { title: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { title: "JSON", icon: <VscJson /> },
      {
        title: "Azure DEVOPs",
        icon: <SiAzuredevops className="text-blue-500" />,
      },
      { title: "NPM", icon: <TbBrandNpm className="text-red-600" /> },
      {
        title: "Bootstrap",
        icon: <BsBootstrapFill className="text-violet-600" />,
      },
    ],
  };
  const educations = [
    {
      qualification: "Bachelor of Computer Applications - BCA",
      from: "Presidency College, Bangalore, India",
      duration: "2017 - 2020",
    },
    {
      qualification: "Pre-University College - CEBA",
      from: "Stracey’s PU College, Bangalore, India",
      duration: "2016",
    },
  ];

  const scrolled = useSelector((state) => state.profile.scroll);

  const rows = [];
  const itemsPerRow = 5;

  // Split skills into rows of 5
  for (let i = 0; i < skills.length; i += itemsPerRow) {
    rows.push(skills.slice(i, i + itemsPerRow));
  }

  return (
    <div className="z-30 ">
      <p className="h-full mt-[5%] max-sm:mt-[10%] mb-16 max-sm:mb-5 font-serif text-4xl text-center max-sm:text-2xl">
        SKILLS
      </p>

      <div className="relative flex flex-col gap-20 text-xl max-sm:text-sm max-sm:overflow-hidden px-6">
        {/* Centered Triangle in the Background */}
        <>
          <div
            className="z-0 w-0 h-0 absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 border-t-[150px] border-t-transparent 
                        border-r-[290px] border-r-blue-600/30 border-b-[320px] max-sm:border-b-[220px] border-b-transparent"
          ></div>

          <div
            className="z-0 w-0 h-0 absolute top-[80%] left-0 transform -translate-x-1/2 -translate-y-1/2 border-t-[150px] border-t-transparent 
                        border-l-[290px] border-l-blue-600/30 border-b-[320px] border-b-transparent"
          ></div>

          {/* <div
            className="z-0 w-0 h-0 absolute top-[90%] -right-3/4 transform -translate-x-1/2 border-t-[10px] border-t-transparent 
                        border-r-[390px] border-r-blue-600/30 border-b-[350px] border-b-transparent"
          ></div> */}
        </>

        {/* Skills */}
        <div className="z-10 flex justify-center w-full">
          <div className="flex justify-center gap-5 w-4/5 max-sm:w-full max-md:flex-col">
            {/* Core Skills */}
            <div className="px-2 py-4 border-r max-sm:border-r-0 max-sm:px-1 w-1/2 max-md:w-full">
              <p className="py-1 mb-3 border-b  border-b-black w-fit">
                Core Skills
              </p>{" "}
              {/* <div className="grid grid-cols-4 gap-10 text-[16px]"> */}
              <div className="flex flex-wrap gap-10 max-sm:gap-4 text-[16px] max-sm:text-[10px]">
                {skillSet.coreSkills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center bg-white justify-center gap-1 shadow-xl w-fit border border-blue-600/30 rounded-full px-4 py-2 max-sm:text-sm"
                  >
                    <p>{skill.title}</p>
                    <span>{skill.icon}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Other Skills */}
            <div className="px-2 py-4  max-sm:px-1 w-1/2 max-md:w-full">
              <p className="py-1 mb-3 border-b  border-b-black w-fit">
                Other Skills
              </p>
              {/* <div className="grid grid-cols-3 gap-10 text-sm"> */}
              <div className="flex flex-wrap gap-10 max-sm:gap-4 text-[16px] max-sm:text-xs">
                {skillSet.otherSkills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center bg-white justify-center gap-1 shadow-xl w-fit border border-blue-600/30 rounded-full px-4 py-2 max-sm:text-sm"
                  >
                    <p>{skill.title}</p>
                    <span>{skill.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="relative flex flex-col justify-center items-center my-5 overflow-hidden ">
          <p className="w-fit border-b-2 border-black text-4xl max-sm:text-3xl font-serif font-semibold">
            Educations
          </p>
          <div className="flex max-sm:flex-col items-center gap-10 max-sm:gap-2 mt-10 space-y-20">
            {educations.map((education, i) => (
              <div
                key={i}
                className="relative odd:animate-right-to-left even:animate-left-to-right"
              >
                <div
                  className={`z-0 w-0 h-0 absolute top-1/4 transform -translate-x-1/2 -translate-y-1/2 
                    ${
                      i == 0
                        ? "right-1/2 border-t-[110px] border-l-[170px] border-l-blue-600/30 border-b-[70px] max-sm:border-t-[55px] max-sm:border-l-[85px] max-sm:border-b-[35px]"
                        : "left-3/4 border-t-[100px] border-r-[170px] border-r-blue-600/30 border-b-[60px] max-sm:border-t-[50px] max-sm:border-r-[85px] max-sm:border-b-[30px]"
                    }
                    border-t-transparent  border-b-transparent`}
                ></div>
                <p className="text-2xl max-sm:text-[16px] font-bold pb-4 max-sm:pb-1">
                  {education.qualification}
                </p>
                <p className="font-light max-sm:text-sm">{education.from}</p>
                <p>{education.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

{
  /* {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-5 max-md:grid-cols-2 gap-5 even:place-items-center`}
            // className={`grid grid-cols-5 max-md:grid-cols-2 gap-5 items-center justify-center ${
            //   rowIndex % 2 === 0
            //     ? "md:animate-right-to-left-infinite max-md:animate-bounce"
            //     : "md:animate-left-to-right-infinite max-md:animate-bounce"
            // }`}
          >
            {row.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex items-center bg-white justify-center gap-1 shadow-xl w-fit border rounded px-4 py-2 max-sm:text-sm"
              >
                <p>{skill.title}</p>
                <span>{skill.icon}</span>
              </div>
            ))}
          </div>
        ))} */
}
