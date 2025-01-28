import React from "react";

const HeroSection = () => {
  return (
    <main className="flex justify-center items-center max-h-[1080px] ml-28 mr-28 mt-32 h-80">
      <div>
        <h1 className="font-extrabold text-6xl whitespace-pre-line ">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-semibold text-gray-600 mt-4">
          YOUR FEET DESERVE THE BEST, AND NIKE IS HERE TO DELIVER WITH SHOES
          <br />
          THAT COMBINE COMFORT, STYLE, AND PERFORMANCE.
        </p>

        <div className="flex gap-7  my-4">
          <button className=" border px-6 py-2 rounded-sm bg-red-600 text-white">
            Shop Now
          </button>
          <button className="border-2 px-6 py-2 rounded-sm ">Category</button>
        </div>

        <div className="mt-2">
          <p className="font-semibold">Also Available On</p>
        </div>

        <div className="flex gap-5 ">
          <img src="../public/Images/flipkart.png" alt="flipkart-logo" />
          <img src="../public/Images/amazon.png" alt="amazon-logo" />
        </div>
      </div>
      <div>
        <img src="../public/Images/hero-image.png" alt="amazon-logo" />
      </div>
    </main>
  );
};

export default HeroSection;
