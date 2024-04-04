"use client";

import React, { useState } from "react";

import RightwideDrawer from "../models/RightwideDrawer";

export const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="w-[100%]   flex justify-start  border-black   items-center h-screen">
        <button
          className="bg-gray-400 text-white z-10 border-2 border-white-400 absolute
           left-10 top-20  px-8 py-3 rounded"
          onClick={togglePopup}
        >
          Save segment
        </button>

        {showPopup && <RightwideDrawer togglePopup={togglePopup} />}
      </div>
    </>
  );
};
