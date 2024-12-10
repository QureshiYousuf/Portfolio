import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="h-[100px] mx-5 p-4 flex justify-between items-center gap-4 ">
      {/* <div>
        <img
          onClick={() => {
            navigate("/");
          }}
          src="profile.jpg"
          className="w-20 h-20 rounded-full"
          alt="logo"
        />
      </div>

      <div className="flex gap-4 items-center">
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
