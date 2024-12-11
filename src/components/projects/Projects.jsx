import React from "react";
import InstantCashPick from "./InstantCashPick";
import ECommerce from "./ECommerce";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center top-10 pb-10 max-sm:pb-5">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-16 max-sm:gap-8">
        <p className="text-4xl -top-[10%] text-center font-serif font-bold">
          Projects
        </p>
        <InstantCashPick />
        {/* <ECommerce /> */}
      </div>
    </div>
  );
};

export default Projects;
