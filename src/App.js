
import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gray-200">

      <div className="flex flex-col items-center">

        <h1 className="text-4xl font-bold text-gray-800">
          Our Testimonials
        </h1>

        <div className="bg-violet-400 h-1 w-1/5 mt-2 rounded"></div>

        <Testimonials reviews={reviews} />

      </div>

    </div>
  );
};

export default App;
