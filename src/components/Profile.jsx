// import React, { useEffect, useState } from "react";
// import { FaPlane } from "react-icons/fa6";
// import { useSelector } from "react-redux";

// const Profile = ({
//   scrollToSection,
//   skillsRef,
//   experienceRef,
//   educationRef,
//   projectsRef,
// }) => {
//   console.log("Profile Component");

//   const scrolled = useSelector((state) => state.profile.scroll);

//   const profileSummary = [
//     `Front-end web developer with 3+ years of experience in designing responsive online applications using React.js`,
//     "Ability to write React, JavaScript ES6, and other high-quality, scalable, and maintainable code",
//     "Using the best strategies to optimize web applications performance to provide a seamless user experience.",
//     "Skillfully integrating React Router DOM with RESTful APIs to provide smooth data exchange with backend services.",
//     "Capacity to create scalable products with state management techniques like Redux, Redux Tool Kit, and Context API.",
//     "Collaborated with designers to implement concept and design of website.",
//   ];

//   return (
//     <div
//       id="profile"
//       className={`section z-20 fixed top-0 left-0 w-full flex items-center transition-all ${
//         scrolled
//           ? "h-16 p-2 shadow-lg py-5 bg-white justify-between pl-5"
//           : "h-full justify-center"
//       }`}
//     >
//       {/* Central Profile Image */}
//       <div
//         className={`z-10 relative flex justify-center items-center ${
//           scrolled ? "gap-5 max-sm:gap-2" : ""
//         }`}
//       >
//         <img
//           src="/profilecut.png"
//           alt="Profile"
//           className={`rounded-full object-cover transition-all ${
//             scrolled
//               ? "w-12 h-12 "
//               : "w-72 h-96 rounded-3xl max-sm:w-32 max-sm:h-44"
//           }`}
//         />
//         <h1
//           className={`text-violet-800 ${
//             !scrolled
//               ? "absolute top-[-90px] text-2xl font-bold text-center max-sm:text-sm max-sm:top-[-150%] w-full"
//               : "text-lg font-serif"
//           }`}
//         >
//           <span>React Developer with 3+ years experience</span>
//           <span
//             className={`${
//               scrolled ? "max-md:hidden max-sm:text-xs" : "hidden"
//             }`}
//           >
//             {" "}
//             in creating dynamic, high-performance web applications.
//           </span>
//         </h1>
//       </div>

//       {/* Floating Summary Points */}
//       {!scrolled && (
//         <div className="absolute w-full h-full top-0 left-0 text-lg max-sm:text-xs">
//           {/* Top Left */}
//           <div className="absolute top-[30%] max-sm:top-[20%] left-[20%] max-sm:left-[10%] text-right max-w-xs max-sm:w-1/4">
//             {profileSummary[0]}
//           </div>
//           {/* Top Right */}
//           <div className="absolute top-[30%] max-sm:top-[20%] right-[20%] max-sm:right-[10%] text-left  max-w-xs max-sm:w-1/4">
//             {profileSummary[1]}
//           </div>
//           {/* Left Center */}
//           <div className="absolute top-[50%] left-[10%] max-sm:left-[3%] transform -translate-y-1/2 text-right max-w-xs max-sm:w-1/4">
//             {profileSummary[2]}
//           </div>
//           {/* Right Center */}
//           <div className="absolute top-[50%] right-[10%] max-sm:right-[3%] transform -translate-y-1/2 text-left  max-w-xs max-sm:w-1/4">
//             {profileSummary[3]}
//           </div>
//           {/* Bottom Left */}
//           <div className="absolute bottom-[30%] max-sm:bottom-[20%] left-[20%] max-sm:left-[10%] text-right  max-w-xs max-sm:w-1/4">
//             {profileSummary[4]}
//           </div>
//           {/* Bottom Right */}
//           <div className="absolute bottom-[30%] max-sm:bottom-[20%] right-[20%] max-sm:right-[10%] text-left  max-w-xs max-sm:w-1/4">
//             {profileSummary[5]}
//           </div>
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       {scrolled && (
//         <div className="pr-5 flex justify-center gap-5 max-sm:hidden">
//           <button
//             onClick={() => scrollToSection(skillsRef)}
//             className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
//           >
//             Skills
//           </button>
//           <button
//             onClick={() => scrollToSection(experienceRef)}
//             className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
//           >
//             Experience
//           </button>
//           <button
//             onClick={() => scrollToSection(projectsRef)}
//             className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
//           >
//             Projects
//           </button>
//           <button
//             onClick={() => scrollToSection(educationRef)}
//             className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
//           >
//             Education
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import profileImage from "./profilecut.PNG";

const Profile = ({
  scrollToSection,
  skillsRef,
  experienceRef,
  educationRef,
  projectsRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrolled = useSelector((state) => state.profile.scroll);

  const profileSummary = [
    `Front-end web developer with 3+ years of experience in designing responsive online applications using React.js`,
    "Ability to write React, JavaScript ES6, and other high-quality, scalable, and maintainable code",
    "Using the best strategies to optimize web applications performance to provide a seamless user experience.",
    "Skillfully integrating React Router DOM with RESTful APIs to provide smooth data exchange with backend services.",
    "Capacity to create scalable products with state management techniques like Redux, Redux Tool Kit, and Context API.",
    "Collaborated with designers to implement concept and design of website.",
  ];

  return (
    <div
      id="profile"
      className={`section z-20 fixed top-0 left-0 w-full flex items-center transition-all ${
        scrolled
          ? "h-16 p-2 shadow-lg py-5 bg-white justify-between"
          : "h-full justify-center"
      }`}
    >
      {/* Central Profile Image */}
      <div
        className={`z-10 relative flex justify-center items-center ${
          scrolled ? "gap-5 max-sm:gap-2" : ""
        }`}
      >
        <img
          // src="/profilecut.PNG"
          src={profileImage}
          alt="Profile"
          className={`rounded-full object-cover transition-all ${
            scrolled
              ? "w-10 h-full "
              : "w-72 h-96 rounded-3xl max-sm:w-32 max-sm:h-44"
          }`}
        />
        <h1
          className={`text-violet-800 ${
            !scrolled
              ? "absolute top-[-90px] text-2xl font-bold text-center max-sm:text-sm max-sm:top-[-96%] w-full"
              : "text-lg max-sm:text-sm font-serif"
          }`}
        >
          <span>React Developer with 3+ years experience</span>
          <span
            className={`${
              scrolled ? "max-md:hidden max-sm:text-xs" : "hidden"
            }`}
          >
            {" "}
            in creating dynamic, high-performance web applications.
          </span>
        </h1>
      </div>

      {/* Floating Summary Points */}
      {!scrolled && (
        <div className="absolute w-full h-full top-0 left-0 text-lg max-sm:text-xs max-sm:text-[10px] ">
          {/* Top Left */}
          <div className="absolute top-[30%] max-sm:top-[17%] left-[20%] max-sm:left-[10%] text-right max-w-xs max-sm:w-1/4">
            {profileSummary[0]}
          </div>
          {/* Top Right */}
          <div className="absolute top-[30%] max-sm:top-[17%] right-[20%] max-sm:right-[10%] text-left  max-w-xs max-sm:w-1/4">
            {profileSummary[1]}
          </div>
          {/* Left Center */}
          <div className="absolute top-[50%] left-[10%] max-sm:left-[3%] transform -translate-y-1/2 text-right max-w-xs max-sm:w-1/4">
            {profileSummary[2]}
          </div>
          {/* Right Center */}
          <div className="absolute top-[50%] right-[10%] max-sm:right-[3%] transform -translate-y-1/2 text-left  max-w-xs max-sm:w-1/4">
            {profileSummary[3]}
          </div>
          {/* Bottom Left */}
          <div className="absolute bottom-[30%] max-sm:bottom-[17%] left-[20%] max-sm:left-[10%] text-right  max-w-xs max-sm:w-1/4">
            {profileSummary[4]}
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-[30%] max-sm:bottom-[17%] right-[20%] max-sm:right-[10%] text-left  max-w-xs max-sm:w-1/4">
            {profileSummary[5]}
          </div>
        </div>
      )}

      {/* Hamburger Menu for Small Screens */}
      {scrolled && (
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl max-sm:text-xl text-violet-400 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 w-full max-sm:w-fit bg-white shadow-lg flex flex-col items-center gap-4 py-4 max-sm:px-4">
              <button
                onClick={() => {
                  scrollToSection(skillsRef);
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 max-sm:py-1 max-sm:text-sm bg-violet-400 text-white rounded-md hover:bg-violet-600 w-3/4 max-sm:w-full"
              >
                Skills
              </button>
              <button
                onClick={() => {
                  scrollToSection(experienceRef);
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 max-sm:py-1 max-sm:text-sm bg-violet-400 text-white rounded-md hover:bg-violet-600 w-3/4 max-sm:w-full"
              >
                Experience
              </button>
              <button
                onClick={() => {
                  scrollToSection(projectsRef);
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 max-sm:py-1 max-sm:text-sm bg-violet-400 text-white rounded-md hover:bg-violet-600 w-3/4 max-sm:w-full"
              >
                Projects
              </button>
              {/* <button
                onClick={() => {
                  scrollToSection(educationRef);
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600 w-3/4 max-sm:w-full"
              >
                Education
              </button> */}
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons for Large Screens */}
      {scrolled && (
        <div className="hidden md:flex justify-center gap-5">
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(experienceRef)}
            className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
          >
            Projects
          </button>
          {/* <button
            onClick={() => scrollToSection(educationRef)}
            className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
          >
            Education
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Profile;
