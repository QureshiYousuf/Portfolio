import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InstantCashPickDetail = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array ensures it runs only once on mount

  console.log("Object.entries(features.Purchase)", Object.entries(features));

  return (
    <div>
      <button
        className="ml-5 px-4 py-2 bg-black text-white rounded"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="relative">
        <div className="flex justify-center items-center max-sm:px-2">
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
              src="/images/ICP/NewLogo.png"
              alt="ICP - Logo"
              className="w-3/5 max-sm:w-4/5"
            />
          </div>
        </div>
        <div className="bg-sky-500/2 text-black/95 flex flex-col justify-center items-center border rounded-lg">
          {Object.entries(features).map(([key, value, i]) => (
            <div
              key={i}
              //   className="relative py-10 even:bg-violet-200 odd:bg-violet-100 px-4"
              className="relative py-10 w-3/4 text-black= border-b border-b-white px-4"
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
              {value.map((list) => (
                <div className=" flex flex-col odd:items-end py-5">
                  {Object.entries(list).map(([itemKey, itemValue]) => (
                    <div className="relative">
                      <span className="absolute lg:hidden opacity-5 text-5xl top-1/2 left-1/2 trasform -translate-x-1/2">
                        {key}
                      </span>
                      <p className="text-xl py-2 font-serif font-semibold text-black">
                        {itemKey}
                      </p>
                      <div className="space-y-1">
                        {itemValue.map((listItem) => (
                          <p>- {listItem}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstantCashPickDetail;
