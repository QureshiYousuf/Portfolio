import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoLinkedin, IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Footer = () => {
  // const [contactInfo, setContactInfo] = useState();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  console.log("formData", formData);

  const handleInputChange = (e) => {
    console.log("handleInputChange");
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formData);

  //   // Call backend API or from_email service here
  //   try {
  //     const response = await fetch("/api/send-from_email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //     } else {
  //       alert("Failed to send message.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending from_email:", error);
  //     alert("Error sending message.");
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const { from_email, message } = formData;
  //   const mailtoLink = `mailto:qureshiyusuff@gmail.com?subject=Contact Form Submission&body=Email: ${from_email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  //   window.location.href = mailtoLink;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New handle");

    emailjs
      .send(
        "service_b4z2ny7", // Replace with your EmailJS service ID
        "template_scf6vrx", // Replace with your EmailJS template ID
        formData,
        "bM80uvFy1ctIT9PLf" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("response from Email:", response);
          setStatus("Message sent successfully!");
          emailjs
            .send(
              "service_b4z2ny7", // Replace with your EmailJS service ID
              "template_3cb62w8", // Replace with your EmailJS template ID
              {
                to_email: formData.from_email,
                to_name: formData.from_name,
                from_name: "Qureshi",
                message:
                  "Thank You for contacting Me. I shall get back to you as soon as possible..!!",
              },
              "bM80uvFy1ctIT9PLf" // Replace with your EmailJS public key
            )
            .then(
              (response) => {
                console.log("response while sending to sender:", response);
                setStatus("Message sent successfully!");
              },
              (error) => {
                console.error("Failed to send Email:", error);
                setStatus("Failed to send message.");
              }
            );
        },
        (error) => {
          console.error("Failed to send Email:", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="relative mx-8 my-4 max-sm:mx-2 max-sm:my-3 rounded-lg pb-8 max-sm:pb-12 flex max-md:flex-col max-md:gap-10 justify-around items-center h-fit text-sm py-5 bg-blue-600/30">
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
      {/* Form to Stay In Touch */}
      <div className="px-4 max-sm:px-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <p htmlFor="contact-me" className="text-xl font-serif">
              Stay In Touch.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="contact-me" className="text-lg font-serif">
              Name
            </label>
            <div className="border flex justify-center items-center bg-white overflow-hidden rounded">
              <div>
                <input
                  type="from_name"
                  name="from_name"
                  id="from_name"
                  placeholder="Your Name"
                  className="border-r p-2"
                  value={formData.from_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="bg-white text-lg px-2">
                <MdEmail />
              </div>
            </div>
            <label htmlFor="contact-me" className="text-lg font-serif">
              Email
            </label>
            <div className="border flex justify-center items-center bg-white overflow-hidden rounded">
              <div>
                <input
                  type="from_email"
                  name="from_email"
                  id="from_email"
                  placeholder="Your Email Address"
                  className="border-r p-2"
                  value={formData.from_email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="bg-white text-lg px-2">
                <MdEmail />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="message" className="text-lg font-serif">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Leave your message"
              className="border p-2 rounded"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <button className="text-black font-bold bg-blue-50 border border-blue-800/20 px-4 py-2 w-fit text-sm rounded  hover:bg-white hover:text-blue-500">
              Submit
            </button>
          </div>
        </form>
        {status && <p>{status}</p>}
      </div>
      <p className="absolute bottom-2 max-sm:bottom-3 font-sans max-sm:text-xs">
        <span>@2024 All rights reserved.</span>
        <span className=""> Yusufulla Qureshi.</span>
      </p>
    </div>
  );
};

export default Footer;
