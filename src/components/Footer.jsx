import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoLinkedin, IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  // const [contactInfo, setContactInfo] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative pb-8 max-sm:pb-12 flex max-md:flex-col max-md:gap-10 justify-around items-center h-fit text-sm py-5 bg-blue-600/30">
      {/* Links */}
      <div>
        <ul className="flex flex-col max-md:flex-row gap-5 items-start text-xl px-4">
          <li key={`linkedin`} className="flex items-center gap-2">
            <Link to={`https://linkedin.com/in/yusufulla-qureshi-7278951ba`}>
              <IoLogoLinkedin />
            </Link>
            <span className="text-sm">LinkedIn</span>
          </li>
          <li key={`git`} className="flex items-center gap-2">
            <Link to={`https://github.com/QureshiYousuf`}>
              <FaGitSquare />
            </Link>
            <span className="text-sm">Git</span>
          </li>
          <li key={`insta`} className="flex items-center gap-2">
            <Link>
              <FaInstagram />
            </Link>
            <span className="text-sm">Instagram</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-end gap-4">
        <p className="text-2xl font-serif">Contact</p>
        <p className="flex justify-center items-center gap-2">
          <span className="text-lg">
            <MdLocationOn />
          </span>
          <span>Karnataka, Bangalore - 360032</span>
        </p>
        <p className="flex justify-center items-center gap-2">
          <span className="text-lg">
            <MdEmail />
          </span>
          <span>qureshiyusuff@gmail.com</span>
        </p>
        <p className="flex justify-center items-center gap-2">
          <span className="text-lg">
            <IoIosCall />
          </span>
          <span>+91 6363821097</span>
        </p>
      </div>
      <div className="px-4 max-sm:px-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="contact-me" className="text-xl font-serif">
              {/* Contact Me */}
              Stay In Touch.
            </label>
            <div className="border flex justify-center items-center bg-white overflow-hidden rounded">
              <div>
                <input
                  type="email"
                  name="contact-me"
                  id="contact-me"
                  placeholder="Your Email Address"
                  className="border-r p-2"
                />
              </div>
              <div className="bg-white text-lg px-2">
                <MdEmail />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="message" className="text-xl font-serif">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Leave your message"
              className="border p-2 rounded"
            />
          </div>
          <div className="">
            <button className="text-black font-bold bg-blue-50 border border-blue-800/20 px-4 py-2 w-fit text-sm rounded  hover:bg-white hover:text-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="absolute bottom-2 max-sm:bottom-3 font-sans max-sm:text-xs">
        <span>@2024 All rights reserved.</span>
        <span className=""> Yusufulla Qureshi.</span>
      </p>
    </div>
  );
};

export default Footer;
