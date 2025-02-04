import React, { useEffect, useRef } from "react";
import Profile from "./Profile";
import { FaAnglesDown } from "react-icons/fa6";
import ProfessionalExperience from "./ProfessionalExperience";
import { useSelector, useDispatch } from "react-redux";
import { scrollToggle } from "../features/profileSlice";
import Skills from "./Skills";
// import Education from "./Education";
// import { Outlet, useNavigate } from "react-router-dom";
import Projects from "./projects/Projects";

const Home = () => {
  //   const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const scrolled = useSelector((state) => state.profile.scroll);
  //   console.log("scroll", scrolled);

  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to scroll to a specific component
  const scrollToSection = (ref) => {
    console.log("scrollToSection", ref.current.scrollIntoView);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolled2 = true; // Example flag for your state

  useEffect(() => {
    const handleScroll = () => {
      //   setScrolled(window.scrollY > 100);
      dispatch(scrollToggle(window.scrollY > 100)); // Adjust the value to control when the transition starts
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="absolute">
        {/* <div className="z-50 sticky top-[90%] right-0 bottom-0">Down</div> */}
      </div>
      <div className="min-h-screen text-black">
        <Profile
          scrollToSection={scrollToSection}
          skillsRef={skillsRef}
          experienceRef={experienceRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
        />

        {!scrolled && (
          <div className="absolute bottom-10 left-[50%]">
            <FaAnglesDown
              className="text-7xl text-violet-400 animate-bounce max-sm:text-3xl"
              aria-label="Scroll down"
            />
          </div>
        )}

        {/* Content Section with scroll animation*/}
        {scrolled && (
          <div className="mt-[7%] pb-[2%] flex flex-col items-center justify-center w-full">
            <div
              ref={skillsRef}
              // ref2={educationRef}
              // className="pt-[] py-10 h-screen max-md:h-fit px-6 bg-blue-600/10"
              className="pt-[] py-10 h-fit w-fit max-md:h-fit bg-blue-600/10 mx-12 max-sm:mx-4 rounded-lg"
            >
              <Skills />
            </div>
            <div
              ref={experienceRef}
              className="h-auto py-10 mb-5 max-md:h-fit px-6"
              // className="pt-[] py-10 h-screen max-md:h-fit"
            >
              <ProfessionalExperience />
            </div>
            <div
              ref={projectsRef}
              className="pt-[] py-10 lg:h-screen md:h-screen max-md:h-fit px-6 bg-blue-600/10 mx-12 max-sm:mx-4 rounded-lg"
              // className="pt-[] py-10 h-fit max-md:h-fit bg-blue-600/10"
            >
              <Projects />
            </div>
            {/* <div
              ref={educationRef}
              className="pt-[] py-10 h-screen max-md:h-fit px-6 max-sm:px-2"
              // className="pt-[] py-10 h-screen max-md:h-fit"
            >
              <Education />
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

{
  /* Navigation Buttons
        {scrolled && (
          <div className="sticky top-0 z-40 bg-white shadow-md py-4 flex justify-center gap-5">
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
              onClick={() => scrollToSection(educationRef)}
              className="px-4 py-2 bg-violet-400 text-white rounded-md hover:bg-violet-600"
            >
              Education
            </button>
          </div>
        )} */
}
