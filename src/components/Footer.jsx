import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaGitSquare,
  FaPhoneAlt,
  FaUserEdit,
} from "react-icons/fa";
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

  const [buttonLoading, setButtonLoading] = useState("");
  const [primaryEmailStatus, setPrimaryEmailStatus] = useState("");
  const [secondaryMailStatus, setSecondaryMailStatus] = useState("");

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

    setButtonLoading(true);

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
          setPrimaryEmailStatus(`Email sent successfully to Qureshi!`);
          setButtonLoading(false);
          emailjs
            .send(
              "service_b4z2ny7", // Replace with your EmailJS service ID
              "template_3cb62w8", // Replace with your EmailJS template ID
              {
                to_email: formData.from_email,
                to_name: formData.from_name,
                cc_email: "qureshiyusuff@gmail.com",
                from_name: "Qureshi",
                message:
                  "Thank You for contacting Me. I shall get back to you as soon as possible..!!",
              },
              "bM80uvFy1ctIT9PLf" // Replace with your EmailJS public key
            )
            .then(
              (response) => {
                console.log("response while sending to send:", response);
                setSecondaryMailStatus(
                  `Email sent successfully to ${formData.from_name}!`
                );
              },
              (error) => {
                console.error("Failed to send Email:", error);
                setSecondaryMailStatus("Failed to send message.");
              }
            );
        },
        (error) => {
          console.error("Failed to send Email:", error);
          setPrimaryEmailStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="relative mx-8 my-4 max-sm:mx-2 max-sm:my-3 rounded-lg pb-8 max-sm:pb-12 flex max-md:flex-col max-md:gap-10 justify-around items-center h-fit text-sm py-5 bg-blue-600/30">
      {/* Links */}
      <div id="social-links">
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

      {/* Contact Detail */}
      <div
        id="contact-details"
        className="flex flex-col items-start justify-start gap-4"
      >
        <p className="text-2xl font-serif">Contact</p>
        {/* <p className="flex justify-center items-center gap-1">
          <span className="text-lg">
            <MdLocationOn />
          </span>
          <span>Karnataka, Bangalore - 560032</span>
        </p> */}

        <div className="flex flex-col items-start justify-start gap-4">
          {/* Address */}
          <a
            href="https://www.google.com/maps?q=Karnataka,+Bangalore+560032"
            className="flex items-center gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <MdLocationOn size={18} />
            </span>
            <span>Karnataka, Bangalore - 560032</span>
          </a>

          {/* <MdEmail /> */}
          {/* Email */}
          <a
            href="mailto:qureshiyusuff@gmail.com"
            className="flex items-center gap-2 text-sm"
          >
            <span>
              <FaEnvelope />
            </span>
            <span>qureshiyusuff@gmail.com</span>
          </a>

          {/* Phone */}
          <a href="tel:6363821097" className="flex items-center gap-2 text-sm">
            {/* <IoIosCall /> */}
            <span className="text-lg">
              <FaPhoneAlt />
            </span>
            <span>+91 6363821097</span>
          </a>
        </div>
      </div>

      {/* Form to Stay In Touch */}
      <div id="stayin-touch" className="px-4 max-sm:px-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <p htmlFor="contact-me" className="text-xl font-serif">
              Stay In Touch.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center max-sm:flex-col gap-2 ">
              {/* Name Field */}
              <div>
                <label htmlFor="contact-me" className="text-lg font-serif">
                  Name
                </label>
                <div className="border bg-white flex justify-center items-center overflow-hidden rounded">
                  <input
                    type="from_name"
                    name="from_name"
                    id="from_name"
                    placeholder="Your Name"
                    className="border-r p-2"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="bg-white text-lg px-2">
                    <FaUserEdit />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-me" className="text-lg font-serif">
                  Email
                </label>
                <div className="border flex justify-center items-center bg-white overflow-hidden rounded">
                  <input
                    type="from_email"
                    name="from_email"
                    id="from_email"
                    placeholder="Your Email Address"
                    className="border-r p-2"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="bg-white text-lg px-2">
                    <MdEmail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="message" className="text-lg font-serif">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Leave your message"
              className="border p-2 rounded w-1/2 max-sm:w-full"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <button
              className="text-black font-bold bg-blue-50 border border-blue-800/20 px-4 py-2 w-fit text-sm rounded  hover:bg-white hover:text-blue-500
                          disabled:cursor-none disabled:bg-gray-200"
              disabled={buttonLoading}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="py-1">
          <>
            {primaryEmailStatus && (
              <div className="flex items-center">
                <span>{formData.from_name},</span>
                <span className="text-sm"> {primaryEmailStatus}</span>
              </div>
            )}
            {/* {secondaryMailStatus && (
              <p className="text-sm">{secondaryMailStatus}</p>
            )} */}
          </>
        </div>
      </div>
      <p className="absolute bottom-2 max-sm:bottom-3 font-sans max-sm:text-xs">
        <span>@2024 All rights reserved.</span>
        <span className=""> Yusufulla Qureshi.</span>
      </p>
    </div>
  );
};

export default Footer;
