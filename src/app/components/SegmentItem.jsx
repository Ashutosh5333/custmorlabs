import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";

export  const SegmentItem = ({ segments, onRemove }) => (
    <div className="flex w-[100%] py-2 border-black items-center mr-4">
      <span className="bg-green-500 text-white rounded-full px-2 py-2 mr-2">
        <circle cx="12" cy="12" r="10" fill="green" />
      </span>
      <div className="relative w-[100%]">
        <select className="border-2 rounded w-[100%] py-2 px-3 text-gray-700 leading-tight">
          <option value="" disabled selected>
            {segments.name}
          </option>
        </select>
      </div>
      <div onClick={() => onRemove(segments.id)} className="border-2 m-1 px-2 py-2">
        <AiOutlineMinus />
      </div>
    </div>
  );
  