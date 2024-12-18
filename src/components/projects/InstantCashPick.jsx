import React, { useState } from "react";
import InstantCashPickDetail from "./InstantCashPickDetail";
import { useNavigate } from "react-router-dom";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { CgScrollH } from "react-icons/cg";
import { PiArrowFatLinesDownFill } from "react-icons/pi";

const InstantCashPick = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const details = [
    `Instant Cash Pick is an re-commerce platform where users can sell their used electronic gadgets.`,
    `Customer can sell their old products like mobile phones, laptops, tablets,smartwatches, DSLRs etc to professional buyers.`,
    `It also oﬀers Services such as mobile repairs, laptop repairs, painting, cleaning and more.`,
    `Device recycling for co-friendly disposal and recycling services for old or broken mobiles phones and laptops.`,
  ];

  const images = [
    {
      img: "/images/sell/Home.png",
      label: "Home",
    },
    {
      img: "/images/service/Home.png",
      label: "Service Home",
    },
    {
      img: "/images/recycle/Home.png",
      label: "Recycle Home",
    },
    {
      img: "/images/sell/Products.png",
      label: "Products",
    },
    {
      img: "/images/sell/Condition3.png",
      label: "Set of Questions 3",
    },
    {
      img: "/images/sell/Condition2.png",
      label: "Set of Questions 2",
    },
  ];

  const handlePrev = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-5 p-8 max-sm:p-2">
      <div className="absolute flex justify-center items-center z-0 opacity-20">
        <img src="/images/ICP/NewLogo.png" alt="ICP - Logo" className="w-3/4" />
      </div>
      <p className=" text-3xl max-sm:text-2xl text-center font-serif font-bold mb-8">
        Instant Cash Pick
      </p>

      {/* <div className="z-20 relative w-full h-[400px] max-md:h-fit flex justify-center items-center max-md:flex-col max-sm:gap-5"> */}
      <div className="z-20 relative w-full h-[450px] max-md:h-fit flex flex-col justify-center items-center max-md:flex-col max-sm:gap-5">
        {/* Center Image */}
        {/* <img
          src="/images/sell/Home.png"
          alt="ICP - Home"
          className="w-[37%] h-auto rounded-lg shadow-lg z-10 max-md:hidden"
        /> */}

        {/* Image Carousel */}
        <div className="w-[35%] overflow-x-auto max-md:hidden whitespace-nowrap border border-gray-200 rounded-lg scrollbar">
          <div className={`flex gap-4 p-4 `}>
            {images.map((image, index) => (
              <div
                className="inline-block text-center w-[300px w-fit flex-none"
                key={index}
              >
                {/* Image */}
                <img
                  src={image.img}
                  alt={`Screenshot of ${image.label}`}
                  className="h-auto w-[100%] max-w-full object-cover rounded-lg shadow-md"
                  style={{ flexShrink: 0 }}
                />

                {/* Image Label */}
                <span className="text-gray-600 font-medium mb-2 text-sm">
                  {image.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="flex justify-center items-center gap-[2px] text-[10px] text-center max-md:hidden">
          <CgScrollH className="text-sm" />
          <span>Scroll Horizontal To See All Images</span>
          <CgScrollH className="text-sm" />
        </p>

        {/* Top Detail */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white w-fit p-4
            rounded-lg shadow-inner shadow-blue-600/30
            max-md:w-full max-md:static max-md:-translate-y-0 max-md:translate-x-0 max-sm:text-sm max-sm:p-2"
          //   className={`w-full text-center`}
        >
          <p>{details[0]}</p>
        </div>

        {/* Right Detail */}
        <div
          className="absolute top-1/2 right-52 transform -translate-y-1/2 translate-x-1/2 text-center w-1/4 bg-white p-4
            rounded-lg shadow-inner shadow-blue-600/30
            max-md:w-full max-md:static max-md:-translate-y-0 max-md:translate-x-0 max-sm:text-sm"
        >
          <p>{details[1]}</p>
        </div>

        {/* center image for medium screen size */}
        {/* <img
          src="/images/ICP/ICP - Home.png"
          alt="ICP - Home"
          className="w-[85%] h-auto rounded-lg shadow-lg z-10 md:hidden max-md:static"
        /> */}

        <p className="flex justify-center items-center gap-[2px] text-[10px] text-center md:hidden">
          <CgScrollH className="text-sm" />
          <span>Scroll Horizontal To See All Images</span>
          <CgScrollH className="text-sm" />
        </p>
        <div className="w-[90%] overflow-x-auto md:hidden">
          <div className="flex gap-4">
            {images.map((image, index) => (
              <>
                <div
                  className="inline-block text-center w-[100%] flex-none"
                  key={index}
                >
                  <img
                    src={image.img}
                    alt="ICP - Home"
                    className=" w-[100%] h-auto rounded-md shadow-lg z-10 max-md:static"
                  />
                  <span className="text-center text-[8px]">{image.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>
        <p className="text-[8px] md:hidden flex gap-1 items-center">
          <span>View Full Project To Know More</span>
          <span>
            <PiArrowFatLinesDownFill />
          </span>
        </p>

        {/* Bottom Detail */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center w-fit bg-white p-4
            rounded-lg shadow-inner shadow-blue-600/30
            max-md:w-full max-md:static max-md:-translate-y-0 max-md:translate-x-0 max-sm:text-sm"
        >
          <p>{details[2]}</p>
        </div>

        {/* Left Detail */}
        <div
          className="absolute top-1/2 left-52 transform -translate-y-1/2 -translate-x-1/2 text-center w-1/4 bg-white p-4
            rounded-lg shadow-inner shadow-blue-600/30
            max-md:w-full max-md:static max-md:-translate-y-0 max-md:translate-x-0 max-sm:text-sm"
        >
          <p>{details[3]}</p>
        </div>
      </div>

      <button
        onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
        onClick={() => {
          setShowMore((prev) => !prev);
          navigate(`/project/${`InstantCashPick`}`);
        }}
        className="z-20 mt-5 border rounded text-white bg-violet-500 hover:bg-violet-600 px-4 py-2 flex items-center justify-center gap-1"
      >
        <span>View Complete Project</span>
        <span className="text-2xl">
          {isHovered ? <GrFormView /> : <GrFormViewHide />}
        </span>
      </button>
      <p className="text-[12px] max-md:hidden flex gap-1 items-center">
        <span>View Full Project To Know More</span>
        <span>
          <PiArrowFatLinesDownFill className="rotate-180" />
        </span>
      </p>

      {showMore && <InstantCashPickDetail />}
    </div>
  );

  // return (
  //   <div className="relative flex flex-col items-center justify-center gap-5 p-8 max-sm:p-2">
  //     <div className="absolute flex justify-center items-center z-0 opacity-20">
  //       <img src="/images/ICP/NewLogo.png" alt="ICP - Logo" className="w-3/4" />
  //     </div>
  //     <p className="text-3xl max-sm:text-2xl text-center font-serif font-bold mb-8">
  //       Instant Cash Pick
  //     </p>

  //     {/* Image Carousel */}
  //     <div className="relative w-full max-w-4xl overflow-hidden">
  //       <div
  //         className="flex transition-transform duration-500"
  //         style={{
  //           transform: `translateX(-${activeImageIndex * 100}%)`,
  //           width: `${images.length * 100}%`,
  //         }}
  //       >
  //         {images.map((image, index) => (
  //           <img
  //             key={index}
  //             src={image.src}
  //             alt={image.alt}
  //             className="w-full h-auto object-contain flex-shrink-0"
  //             style={{ width: `${100 / images.length}%` }}
  //           />
  //         ))}
  //       </div>
  //       {/* Navigation Buttons */}
  //       <button
  //         onClick={handlePrev}
  //         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg"
  //       >
  //         &#8592;
  //       </button>
  //       <button
  //         onClick={handleNext}
  //         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg"
  //       >
  //         &#8594;
  //       </button>
  //     </div>

  //     {/* Details */}
  //     <div className="z-20 relative w-full h-fit flex flex-wrap justify-center items-center gap-5 max-sm:gap-2">
  //       {details.map((detail, index) => (
  //         <div
  //           key={index}
  //           className="bg-white p-4 rounded-lg shadow-inner shadow-blue-600/30 w-1/4 max-md:w-full text-center max-sm:text-sm"
  //         >
  //           <p>{detail}</p>
  //         </div>
  //       ))}
  //     </div>

  //     {/* Button */}
  //     <button
  //       onMouseEnter={() => setIsHovered(true)}
  //       onMouseLeave={() => setIsHovered(false)}
  //       onClick={() => {
  //         setShowMore((prev) => !prev);
  //         navigate(`/project/${`InstantCashPick`}`);
  //       }}
  //       className="z-20 mt-5 border rounded text-white bg-violet-500 hover:bg-violet-600 px-4 py-2 flex items-center justify-center gap-1"
  //     >
  //       <span>View Complete Project</span>
  //       <span className="text-2xl">
  //         {isHovered ? <GrFormView /> : <GrFormViewHide />}
  //       </span>
  //     </button>

  //     {showMore && <InstantCashPickDetail />}
  //   </div>
  // );
};

export default InstantCashPick;

const features = {
  Purchase: [
    {
      "Device Selling Process": [
        "Users can select their device model and brand to get an instant price quote for selling their old gadgets",
        "Options include a wide variety of brands and models",
        "Transparant price estimation for devices based on their condition, brand, and model",
        "A clear breakdown of services is provided, such as evaluation of the device's condition and seamless selling options",
      ],
    },
    {
      "Categories and Brand Listings": [
        "The site provides detailed brand-wise categorization, allowing users to browse and select their specific device with ease",
        "Supports multiple phone, Laptop brands and models, covering a wide range of devices",
      ],
    },
    {
      "Pickup Services": [
        "Free device pickup from the user's location, adding convenience for sellers.",
      ],
    },
    {
      "Instant Payments": [
        "Provides instant cash payments upon device collection and inspection.",
      ],
    },
    {
      Support: [
        "Customer support and FAQs are available to guide users through the process of selling their devices and resolving any queries",
      ],
    },

    {
      "Security Measures": [
        "Ensures customer data is securely handled and follows responsible recycling practices.",
      ],
    },
  ],
  Service: [
    {
      Services: [
        "We provide a wide range of services including Mobile / Laptop repairs, Decorators For All Occassions, Painters etc. For more visit our Official Website",
      ],
    },
    {
      Inspection: [
        "Provides a feasible charges for Inspection across various services.",
      ],
    },
  ],
  Recycle: [
    {
      "Device Recycling": [
        "Eco-friendly disposal and recycling services for old or broken mobiles phones and laptops.",
      ],
    },
    {
      "Categories and Brand Listings": [
        "The site provides detailed brand-wise categorization, allowing users to browse and select their specific device with ease",
        "Supports multiple phone, Laptop brands and models, covering a wide range of devices",
      ],
    },
    {
      "Pickup Services": [
        "Free device pickup from the user's location, adding convenience for sellers.",
      ],
    },
    {
      "Instant Payments": [
        "Provides instant cash payments upon device collection and inspection.",
      ],
    },
  ],
};

//   const details = [
//     `Instant Cash Pick is an re-commerce platform where users can sell their used electronic gadgets like mobile phones, laptops, tablets,smartwatches, DSLRs etc to professional buyers.`,
//     `It also oﬀers Services such as mobile repairs, laptop repairs, painting, cleaning and more.`,
//     `Led the end-to-end development process of the Instant Cash Pick using the MERN stack (MongoDB, Express.js, React.js, Node.js).`,
//     `Build responsive and interactive user interfaces using modern frontend technologies such as React.js, Redux ToolKit, RTK QUery,
//             and CSS frameworks Tailwind CSS.`,
//     `Develop robust and scalable backend services using Node.js and Express.js.`,
//     `Configured and deployed the web application to the cloud platform Hostinger, in Ubuntu Linux Server`,
//     `Ensured cross-browser compatibility and optimize Front End performance for fast loading and smooth user experience.`,
//     `Communicated eﬀectively with clients to understand their business requirements, provide project updates, and address any concerns or feedback.`,
//   ];
