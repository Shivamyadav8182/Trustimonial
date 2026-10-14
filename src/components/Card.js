
import React from "react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const Card = (props) => {
  const reviews = props.reviews;

  return (
    <div className="relative flex flex-col items-center mt-20">

      {/* Profile Image */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] object-cover"
          src={reviews.image}
          alt={reviews.name}
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]
        "></div>
      </div>

      {/* Review Card */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 pt-20 w-full max-w-md">

        <p className="text-xl font-bold text-gray-800 capitalize">
          {reviews.name}
        </p>

        <p className="text-sm text-violet-600 uppercase mt-1">
          {reviews.job}
        </p>

        <div className="text-violet-500 text-3xl mt-4">
          <BiSolidQuoteLeft />
        </div>

        <div className="text-center text-gray-600 mt-2">
          {reviews.text}
        </div>

        <div className="text-violet-500 text-3xl mt-2">
          <BiSolidQuoteRight />
        </div>



        

      </div>
    </div>
  );
};

export default Card;