import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1280px] ml-28 mr-28 mt-10 h-20">
      <div>
        <img src="../public/Images/brand_logo.png" alt="brand-logo" />
      </div>

      <ul className="flex gap-12 font-bold ">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="px-6  bg-red-600 h-10 text-white font-medium rounded-sm">
        Login
      </button>
    </nav>
  );
};

export default Navigation;
