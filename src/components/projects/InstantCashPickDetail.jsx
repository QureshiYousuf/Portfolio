import React from "react";
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
        {/* <p className="text-3xl text-center font-bold py-5">
          Instant Cash Pick Detail
        </p> */}
        <div className="flex justify-center items-center">
          <p className="flex flex-col">
            <span className="text-6xl font-serif font-bold">Instant</span>
            <span className="text-5xl font-serif font-semibold">Cash Pick</span>
          </p>
          <div className="flex justify-center items-center opacity-25">
            <img
              src="/images/ICP/NewLogo.png"
              alt="ICP - Logo"
              className="w-3/5"
            />
          </div>
        </div>
        <div className="bg-black/95 bg-blue-600/50 flex flex-col justify-center items-center border rounded-lg">
          {Object.entries(features).map(([key, value, i]) => (
            <div
              key={i}
              //   className="relative py-10 even:bg-violet-200 odd:bg-violet-100 px-4"
              className="relative py-10 w-3/4 text-black= border-b border-b-white px-4"
            >
              <div className="z-0 w-[2px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-yellow-500/70"></div>

              <p className="font-serif text-4xl text-center font-bold py-4">
                {key}
              </p>
              {value.map((list) => (
                <div className=" flex flex-col odd:items-end py-5">
                  {Object.entries(list).map(([itemKey, itemValue]) => (
                    <div>
                      <p className="text-xl py-2 font-serif font-semibold">
                        {itemKey}
                      </p>
                      {itemValue.map((listItem) => (
                        <p>- {listItem}</p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstantCashPickDetail;
