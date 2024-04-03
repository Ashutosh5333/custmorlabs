import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa";

export const SchemaItem = ({ value, onChange, selectedValue }) => (
    <div className="flex w-[100%] py-2 border-black items-center mr-4">
      <span className="bg-gray-300 text-white rounded-full px-2 py-2 mr-2">
        <circle cx="12" cy="12" r="10" fill="green" />
      </span>
      <div className="relative w-[100%]">
        <select
          onChange={onChange}
          value={selectedValue}
          className="border-2 rounded w-[100%] text-sm py-2 px-3 text-gray-700 leading-tight"
        >
          <option value="" disabled selected>
            Add schema to segment
          </option>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="gender">Gender</option>
          <option value="age">Age</option>
          <option value="account_name">Account Name</option>
          <option value="City">city</option>
          <option value="State">state</option>
        </select>
      </div>
      <div className=" bg-gray-200 rounded m-1 px-2 py-2">
      {/* <AiOutlineMinus className="text-xl font-semibold" /> */}
      <FaMinus className="text-xl font-semibold" />
      </div>
    </div>
  );