import React, { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa";

const sections = [
  { id: "profile", title: "Profile Summary" },
  { id: "experience", title: "Professional Experience" },
];

const SidebarWithPlane = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [animatedTitle, setAnimatedTitle] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.6, // Trigger when 60% of the section is in view
    };

    // console.log("useEffect sidebar for interSection");

    const observerCallback = (entries) => {
      //   console.log("observerCallback entries", entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          console.log("sectionId", sectionId);
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sectionElements = document.querySelectorAll(".section");
    // console.log("sectionElements", sectionElements);
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    // Animate the title letter by letter
    const title = sections.find((s) => s.id === activeSection)?.title || "";
    // console.log("title", title);
    let index = 0;
    setAnimatedTitle("");
    const interval = setInterval(() => {
      //   console.log("title char");
      setAnimatedTitle((prev) => prev + title[index]);
      index = Math.min(++index, title.length);
      if (index >= title.length) clearInterval(interval);
    }, 100); // Adjust speed of animation here

    return () => clearInterval(interval);
  }, [activeSection]);

  //   console.log("animatedTitle", animatedTitle);

  return (
    <div className="flex">
      <p className="absolute top-5 left-5 font-serif">Yusufulla Qureshi.</p>
      {/* Sidebar */}
      {/* <div className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center justify-center ">
        <div className="relative w-full flex flex-col items-center">
          <FaPlane className="text-violet-400 text-2xl animate-move-plane" />

          <div className="absolute top-0 w-[2px] h-full bg-violet-400"></div>

          <div className="mt-20 text-black text-center text-lg font-bold">
            {animatedTitle}
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      {/* <div className="ml-24 w-full space-y-20">
        <div
          id="profile"
          className="section min-h-screen flex items-center justify-center  text-white"
        >
          <h1 className="text-4xl">Profile Summary</h1>
        </div>
        <div
          id="experience"
          className="section min-h-screen flex items-center justify-center bg-gray-700 text-white"
        >
          <h1 className="text-4xl">Professional Experience</h1>
        </div>
      </div> */}
    </div>
  );
};

export default SidebarWithPlane;
