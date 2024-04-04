import React from "react";
import { FaMinus } from "react-icons/fa";

export const SchemaItem = ({ value, onChange, selectedValue, onRemove, segments }) => {
  
  const filteredOptions = [
    "first_name",
    "last_name",
    "gender",
    "age",
    "account_name",
    "City",
    "State"
  ].filter(option => !segments.some(segment => segment.selectedSchema === option));

  return (
    <div className="flex cursor-pointer w-[100%] py-2 border-black items-center mr-4">
      <span className="bg-gray-300 text-white rounded-full px-2 py-2 mr-2">
        <circle cx="12" cy="12" r="10" fill="green" />
      </span>
      <div className="relative w-[100%]">
        <select
          defaultValue={selectedValue} 
          onChange={onChange}
          value={selectedValue}
          className="border-2 rounded w-[100%] text-sm py-2 px-3 text-gray-700 leading-tight"
        >
          <option value="" disabled>
            Add schema to segment
          </option>
          {filteredOptions.map((option, index) => (
            <option key={index} value={option}>
              {option.replace("_", " ")}
            </option>
          ))}
        </select>
      </div>
      <div className=" bg-gray-200 rounded m-1 px-2 py-2" onClick={() => onRemove(value)}>
        <FaMinus className="text-xl font-semibold" />
      </div>
    </div>
  );
};

export default SchemaItem;
