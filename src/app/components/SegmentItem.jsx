import React, { useState } from "react";

import { FaMinus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";



export  const SegmentItem = ({ index, segments, onRemove }) => (
    <div className="flex  cursor-pointer w-[100%] py-2 border-black items-center mr-4">
      <span className={` ${index %2===0 ? "bg-green-500":"bg-pink-500" }  text-white rounded-full px-2 py-2 mr-2`}>
        <circle cx="12" cy="12" r="10" fill="green" />
      </span>
      <div className="relative w-[100%]">
        <select className="border-2  text-sm rounded w-[100%] py-2 px-3 text-gray-700 leading-tight">
          <option value="" disabled selected>
            {segments.name}
          </option>
        </select>
      </div>
      <div onClick={() => onRemove(segments.id)} className=" bg-gray-200 rounded m-1 px-2 py-2">
           <FaMinus className="text-xl font-semibold" />
      </div>
    </div>
  );
  