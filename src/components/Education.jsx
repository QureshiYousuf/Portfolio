import React from "react";

const Education = () => {
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
  return (
    <div className="relative flex flex-col justify-center items-center py-10 overflow-hidden ">
      {/* Centered Triangle in the Background */}
      <>
        {/* <div
        className="z-0 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        border-t-[320px] border-t-blue-50/30 
        border-r-[300px] border-r-blue-300/30 
        border-l-[300px] border-l-blue-300/30 
        border-b-[300px] border-b-gray-200/30
        border"
        ></div> */}
        <div
          className="z-0 w-0 h-0 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:-translate-y-[30%] border-t-[250px] border-t-transparent 
        border-r-[490px] max-sm:border-r-[390px] border-r-blue-600/30 border-b-[320px] max-sm:border-b-[190px] border-b-transparent"
        ></div>
      </>
      <p className="top-0 text-4xl max-sm:text-3xl font-serif font-bold">
        Educations
      </p>
      <div className="flex flex-col gap-10 mt-10 space-y-20">
        {educations.map((education, i) => (
          <div
            key={i}
            className=" odd:animate-right-to-left even:animate-left-to-right"
          >
            <p className="text-2xl max-sm:text-lg font-bold pb-4">
              {education.qualification}
            </p>
            <p>{education.from}</p>
            <p>{education.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
