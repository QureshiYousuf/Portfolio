import React, { useEffect, useState } from "react";
import { FaPlane } from "react-icons/fa6";
import { useSelector } from "react-redux";

const ProfessionalExperience = () => {
  console.log("ProfessionalExperience Component");

  const professionalExperience = [
    {
      designation: "System Engineer",
      company: "Infosys Ltd.",
      duration: "Apr 2023 - Ongoing Bangalore, India",
      responsibilities: [
        "Collaborated with the team to design content and select appropriate solutions for creating and maintaining the website.",
        "Scheduled meetings with clients to discuss website design preference and requirements.",
        "Troubleshot website on diﬀerent browsers to determine quality.",
        "Collaborated with designers to implement concept and design of website.",
        "Developed features that were modular, reusable, and scalable.",
      ],
    },
    {
      designation: "Senior System Associate",
      company: "Infosys Ltd.",
      duration: " Oct 2020 - Mar 2023 Bangalore, India",
      responsibilities: [
        "Participated in pre-project analysis and technical assessments to validate creation of user-friendly interface.",
        "Actively participated in Agile development processes, sprint planning,daily stand-up calls and retrospective meetings.",
        "Created documentations of all processes to simplify all the phases from development to deployment.",
        "Debugged issues related to browser compatibility, responsive design, and accessibility.",
      ],
    },
  ];

  const systemEngineer = [
    "Collaborated with the team to design content and select appropriate solutions for creating and maintaining the website.",
    "Scheduled meetings with clients to discuss website design preference and requirements.",
    "Troubleshot website on diﬀerent browsers to determine quality.",
    "Collaborated with designers to implement concept and design of website.",
    "Developed features that were modular, reusable, and scalable.",
  ];

  const systemAssociate = [
    "Participated in pre-project analysis and technical assessments to validate creation of user-friendly interface.",
    "Actively participated in Agile development processes, sprint planning,daily stand-up calls and retrospective meetings.",
    "Created documentations of all processes to simplify all the phases from development to deployment.",
    "Debugged issues related to browser compatibility, responsive design, and accessibility.",
  ];

  const scrolled = useSelector((state) => state.profile.scroll);

  return (
    <div className="relative flex justify-center top-10">
      {/* Centered Triangle in the Background */}
      {/* <div
        className="z-0 w-0 h-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-[250px] border-t-transparent 
                border-r-[490px] border-r-blue-600/30 border-b-[320px] border-b-transparent"
      ></div> */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-16">
        <p className="text-4xl -top-[10%] text-center font-serif font-bold max-sm:text-2xl">
          Professional Experience
        </p>
        <div className=" flex flex-col gap-24">
          {professionalExperience.map((exp, index) => {
            return (
              <div
                key={index}
                className={`relative flex justify-center max-md:flex-col items-center gap-5 ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Company Detail */}
                <div className=" relative flex flex-col justify-between gap-5  rounded-xl overflow-hidden">
                  {/* BG triangles */}
                  <>
                    <div
                      className="z-0 w-0 h-0 absolute top-[80%] left-0 transform -translate-x-1/2 -translate-y-3/4 border-t-[150px] border-t-transparent 
                    border-l-[290px] border-l-blue-300/30 border-b-[320px] border-b-transparent"
                    ></div>
                    <div
                      className={`z-0 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      border-t-[320px] border-t-blue-50/30 
                      ${
                        index % 2 !== 0
                          ? "border-r-[300px] border-r-blue-300/30  max-sm:border-r-[200px]"
                          : "border-l-[300px] border-l-blue-300/30 "
                      }
                      
                      border-b-[300px] border-b-gray-200/30
                      border`}
                    ></div>
                  </>

                  <h2 className="z-10 font-serif flex flex-col  px-4 py-2">
                    <span className="font-bold text-2xl max-md:text-xl max-sm:text-lg">
                      {exp.designation}
                    </span>
                    <span className="text-lg text-gray-900 max-md:text-sm">
                      {exp.company}
                    </span>
                    <span className="max-sm:text-sm">{exp.duration}</span>
                  </h2>
                  <ul className="space-y-4 px-4 py-2 z-20">
                    {exp.responsibilities.map((res, i) => (
                      <li
                        key={i}
                        className="font-semibold text-l max-md:text-sm"
                      >
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Company Logo */}
                <div
                  // className={`${
                  //   index % 2 !== 0
                  //     ? "max-md:hidden"
                  //     : "flex justify-center items-center my-auto"
                  // }`}
                  className="flex justify-center w-full max-sm:w-[75%]"
                >
                  <img
                    src="infosys-logo2.jpg"
                    alt="infosys-logo"
                    className={`${
                      index % 2 !== 0 ? "max-md:hidden" : "mt-10 mb-0 "
                    }`}
                    // className="bg-none aspect-[3/2] object-contain mix-blend-color-burn"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;

// const title = "  Professional Experience";

// const [animatedTitle, setAnimatedTitle] = useState("");
// const planeHeigth = "350px";

// useEffect(() => {
//   let index = 0;
//   setAnimatedTitle("");
//   const interval = setInterval(() => {
//     if (index !== title.length - 1) {
//       setAnimatedTitle((prev) => prev + title[index]);
//     }
//     index++;

//     if (index >= title.length) clearInterval(interval);
//   }, 100); // Adjust speed of animation here

//   return () => clearInterval(interval);
// }, []);

// {scrolled && (
//   <div className="absolute top-[20%] left-0 w-20 flex flex-col items-center justify-center">
//     <div className="relative w-full flex flex-col items-center">
//       {/* Plane */}
//       <FaPlane
//         className={`text-violet-400 text-2xl h-[${planeHeigth}] animate-move-plane`}
//       />

//       {/* Line */}
//       <div
//         className={`absolute top-10 w-[2px] h-[${planeHeigth}] bg-violet-400`}
//       ></div>

//       {/* Animated Title */}
//       <div className="mt-10 text-black absolute left-[90%] text-center flex flex-col text-lg font-bold">
//         {animatedTitle.split("").map((char, i) => (
//           <span key={char + i}>{char}</span>
//         ))}
//       </div>
//     </div>
//   </div>
// )}

// DISPLAY

/* System Engineer */
{
  /* <div className="flex justify-center items-center gap-5">
  <div className="flex flex-col justify-between gap-5">
    <h2 className="font-serif flex flex-col">
      <span className="font-bold text-2xl ">System Engineer</span>
      <span className=" text-lg text-gray-900">Infosys Ltd.</span>
      <span>Apr 2023 - Ongoing Bangalore, India</span>
    </h2>
    <ul className="space-y-4">
      {systemEngineer.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
  <div>
    <img
      src="infosys-logo2.jpg"
      alt="infosys-logo"
      // className="bg-none aspect-[3/2] object-contain mix-blend-color-burn"
    />
  </div>
</div>;


<div className="flex justify-center items-center gap-5">
  <div>
    <img
      src="infosys-logo2.jpg"
      alt="infosys-logo"
      // className="bg-none aspect-[3/2] object-contain mix-blend-color-burn"
    />
  </div>
  <div className="flex flex-col justify-between gap-5">
    <h2 className="text-xl font-bold font-serif">
      Senior System Associate Infosys Ltd. Oct 2020 - Mar 2023 Bangalore, India
    </h2>
    <ul className="space-y-4">
      {systemAssociate.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
</div>; */
}
