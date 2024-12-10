import React, { useState } from "react";
import InstantCashPickDetail from "./InstantCashPickDetail";
import { useNavigate } from "react-router-dom";

const ECommerce = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const details = [
    `Instant Cash Pick is an re-commerce platform where users can sell their used electronic gadgets.`,
    `Customer can sell their old products like mobile phones, laptops, tablets,smartwatches, DSLRs etc to professional buyers.`,
    `It also oﬀers Services such as mobile repairs, laptop repairs, painting, cleaning and more.`,
    `Device recycling for co-friendly disposal and recycling services for old or broken mobiles phones and laptops.`,
  ];

  return (
    <div className="relative flex flex-col items-center justify-center gap-5 p-8">
      <p className="text-3xl text-center font-serif font-bold mb-8">
        ECommerce
      </p>
      <div className="relative w-full h-[400px] flex justify-center items-center">
        {/* Center Image */}
        <img
          src="/images/ICP/ICP - Home.png"
          alt="ICP - Home"
          className="w-[37%] h-auto rounded-lg shadow-lg z-10"
        />

        {/* Top Detail */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white w-fit p-4 rounded-lg shadow-inner shadow-blue-600/30">
          <p>{details[0]}</p>
        </div>

        {/* Right Detail */}
        <div className="absolute top-1/2 right-52 transform -translate-y-1/2 translate-x-1/2 text-center w-1/4 bg-white p-4 rounded-lg shadow-inner shadow-blue-600/30">
          <p>{details[1]}</p>
        </div>

        {/* Bottom Detail */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center w-fit bg-white p-4 rounded-lg shadow-inner shadow-blue-600/30">
          <p>{details[2]}</p>
        </div>

        {/* Left Detail */}
        <div className="absolute top-1/2 left-52 transform -translate-y-1/2 -translate-x-1/2 text-center w-1/4 bg-white p-4 rounded-lg shadow-inner shadow-blue-600/30">
          <p>{details[3]}</p>
        </div>
      </div>

      {!showMore && (
        <button
          onClick={() => {
            setShowMore((prev) => !prev);
            navigate("/project");
          }}
          className="mt-5 border rounded text-white bg-violet-500 hover:bg-violet-600 px-4 py-2"
        >
          View Complete Project
        </button>
      )}

      {showMore && <InstantCashPickDetail />}
    </div>
  );
};

export default ECommerce;
