import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgScrollH } from "react-icons/cg";

const InstantHubDetail = () => {
  const navigate = useNavigate();
  const [animateSlides, setAnimateSlides] = useState({
    Purchase: true,
    Service: true,
    Recycle: true,
  });

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

      {
        images: [
          {
            img: "/images/sell/Home.png",
            label: "Home",
          },
          {
            img: "/images/sell/Brands.png",
            label: "Brands",
          },
          {
            img: "/images/sell/Products.png",
            label: "Products",
          },
          {
            img: "/images/sell/ProductDetail.png",
            label: "Product Detail",
          },
          {
            img: "/images/sell/Condition1.png",
            label: "Set of Questions 1",
          },
          {
            img: "/images/sell/Condition2.png",
            label: "Set of Questions 2",
          },
          {
            img: "/images/sell/Condition3.png",
            label: "Set of Questions 3",
          },
          {
            img: "/images/sell/PhoneNumber.png",
            label: "Phone Number",
          },
          {
            img: "/images/sell/FinalPage.png",
            label: "Final Page",
          },
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
      {
        images: [
          {
            img: "/images/service/ServiceHome.png",
            label: "Service Home",
          },
          {
            img: "/images/service/ServiceMobileBrands.png",
            label: "Mobile Service Brands",
          },
          {
            img: "/images/service/ServiceMobileProblems.png",
            label: "Select Device Problems",
          },
          {
            img: "/images/service/ServiceMobileBooking.png",
            label: "Book Mobile Service",
          },
          {
            img: "/images/service/ServiceElectricianBooking.png",
            label: "Book Electrician Service",
          },
          {
            img: "/images/service/ServicePaintingBooking.png",
            label: "Book Painting Service",
          },
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
      {
        images: [
          {
            img: "/images/recycle/RecycleHome.png",
            label: "Recycle Home",
          },
          {
            img: "/images/recycle/RecycleBrands.png",
            label: "Recycle Brand",
          },
          {
            img: "/images/recycle/RecycleProducts.png",
            label: "Recycle Product",
          },
          {
            img: "/images/recycle/RecycleProductDetail.png",
            label: "Recycle Product Detail",
          },
          {
            img: "/images/recycle/Question1.png",
            label: "Is Device On?",
          },
          {
            img: "/images/recycle/Question2.png",
            label: "Want to Recycle?",
          },
          {
            img: "/images/recycle/SubmitOrder.png",
            label: "Book Order!",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      <button
        className="z-20 sticky top-5 max-sm:top-2 left-0 max-sm:opacity-90 ml-5 max-sm:ml-2 px-4 py-2 max-sm:px-2 max-sm:py-1 bg-black text-white rounded transition-all ease-out duration-1000"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="relative">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center max-sm:px-2 border-b mb-5">
          {/* <p className="flex flex-col">
            <span className="text-6xl max-sm:text-4xl font-serif font-bold">
              Instant
            </span>
            <span className="text-5xl max-sm:text-3xl font-serif font-semibold">
              Cash Pick
            </span>
          </p> */}
          <div className="flex justify-center items-center opacity-45">
            <img
              src="/images/IH/NewLogo.jpg"
              alt="IH - Logo"
              className="w-3/5 max-sm:w-4/5"
            />
          </div>
        </div>

        {/* Details */}
        <div className="bg-sky-500/2 text-black/95 flex flex-col justify-center items-center rounded-lg">
          <div>
            <Link
              to="https://www.instanthub.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm max-sm:text-xs font-semibold font-serif"
            >
              Visit InstantHub
            </Link>
          </div>
          {Object.entries(features).map(([key, value], i) => (
            <div
              key={i}
              //   className="relative py-10 even:bg-violet-200 odd:bg-violet-100 px-4"
              className={`relative ${i === 0 ? 'pt-4 pb-10' : 'py-10'} w-3/4 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center text-black border-b border-b-white px-4`}
            >
              {/* <div className="z-0 w-[2px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-yellow-500/70"></div> */}

              <div className="w-full flex justify-center">
                <p
                  className={`font-serif text-3xl text-center font-bold py-2 w-fit
                  ${
                    key === "Purchase" &&
                    "text-black-700/80 border bg-black text-white px-4 rounded-xl"
                  }
                  ${
                    key === "Service" &&
                    "bg-blue-700/80 text-white px-4 rounded-xl"
                  }
                  ${
                    key === "Recycle" &&
                    "bg-green-700/80 text-white px-4 rounded-xl"
                  }
                  `}
                >
                  {key}
                </p>
              </div>

              {/* <span className="absolute opacity-5 text-9xl max-sm:text-5xl top-1/2 left-1/2">
                {key}
              </span> */}
              {value.map((list, j) => (
                <div
                  key={j + i}
                  className="max-sm:w-[90%] flex flex-col odd:items-end py-5"
                >
                  {Object.entries(list)
                    .filter(([itemKey1, _]) => itemKey1 !== "images")
                    .map(([itemKey, itemValue], k) => (
                      <div key={i + j + k} className="relative">
                        <span className="absolute lg:hidden opacity-5 text-5xl top-1/2 left-1/2 trasform -translate-x-1/2">
                          {key}
                        </span>
                        <p className="text-xl py-2 font-serif font-semibold text-black">
                          {itemKey}
                        </p>
                        <div className="space-y-1">
                          {itemValue.map((listItem, o) => (
                            <p key={o + 8}>- {listItem}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ))}

              <p className="flex justify-center items-center gap-1 max-sm:gap-[2px] text-[16px] text-center pb-2 max-sm:text-xs">
                <CgScrollH className="text-xl max-sm:text-sm" />
                Scroll Horizontal To See All Images{" "}
                <CgScrollH className="text-xl max-sm:text-sm" />
              </p>
              {/* Images Section */}
              <div className="w-[97%] overflow-x-auto whitespace-nowrap border border-gray-200 rounded-lg scrollbar">
                <div
                  className={`flex gap-4 p-4 ${
                    animateSlides[key] && "animate-scroll-horizontal"
                  } `}
                >
                  {/* {[
                    ...features[key][features[key].length - 1].images,
                    ...features[key][features[key].length - 1].images,
                  ].map((image, index) => ( */}
                  {features[key][features[key].length - 1].images.map(
                    (image, index) => (
                      <div
                        className="inline-block text-center w-[300px] flex-none"
                        key={index}
                      >
                        {/* Image */}
                        <img
                          src={image.img}
                          alt={`${image.label}`}
                          className="h-auto w-[300px] max-w-full object-cover rounded-lg shadow-md"
                          style={{ flexShrink: 0 }}
                        />

                        {/* Image Label */}
                        <span className="text-gray-600 font-medium mb-2 max-sm:text-xs">
                          {image.label}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className={`flex justify-center  my-2`}>
                <button
                  className={`text-sm max-sm:text-xs text-white px-4 py-2 shadow-xl rounded-full transition-all ease-in-out duration-1000 ${
                    animateSlides[key]
                      ? "bg-red-500 hover:bg-white hover:border hover:border-red-500 hover:text-red-500"
                      : "bg-green-600 hover:bg-white hover:border hover:border-green-600 hover:text-green-500"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setAnimateSlides((prev) => {
                      return { ...prev, [key]: !prev[key] };
                    });
                  }}
                >
                  {animateSlides[key] ? "Stop Animation" : "Start Animation"}
                </button>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstantHubDetail;
