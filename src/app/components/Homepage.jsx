"use client";

import React, { useState } from "react";

import RightwideDrawer from "../models/RightwideDrawer";


export const Homepage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };



  return (
    <>
      <div className="w-[100%] flex justify-between border-2 border-black   items-center h-screen">
        
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={togglePopup}
          >
            Save segment
          </button>

        {showPopup && (
        
            <RightwideDrawer togglePopup={togglePopup} />
        )}
      </div>
    </>
  );
};
