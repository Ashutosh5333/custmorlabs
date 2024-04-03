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
      <div className="flex border-2 border-black  justify-center items-center h-screen">
        {!showPopup && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={togglePopup}
          >
            Save segment
          </button>
        )}

        {showPopup && (
          
            <RightwideDrawer />
        )}
      </div>
    </>
  );
};
