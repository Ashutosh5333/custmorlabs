import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import {SchemaItem} from "../components/SchemaItem";
import {SegmentItem} from "../components/SegmentItem"

const RightwideDrawer = () => {
  const [selectedSchema, setSelectedSchema] = useState("");
//   const [segments, setSegments] = useState([
//     { id: 1, name: "First name" },
//     { id: 2, name: "Last name" },
//   ]);

const [segments, setSegments] = useState([]);

  const handleSchemaChange = (e) => {
    setSelectedSchema(e.target.value);
  };

  const addSegment = () => {
    const newSegment = {
      id: Date.now(),
      name: selectedSchema,
      schema: selectedSchema,
    };
    setSegments([...segments, newSegment]);
    setSelectedSchema("")
  };
  
//   console.log("schemma", selectedSchema)
  
  const removeSegment = (id) => {
    const updatedSegments = segments.filter(segment => segment.id !== id);
    setSegments(updatedSegments);
  };

  return (
    <>
      <div className=" min-h-screen  right-0 top-0 w-[100%]  bg-white border-2  border-yellow-300   rounded shadow-lg">
        <div className="flex py-4  bg-blue-500 items-center mb-4">
          <span className=" text-white px-4 py-2 rounded mr-2">
            <MdOutlineArrowBackIos />
          </span>
          <h2 className="text-white">Save Segment</h2>
        </div>

        {/*  top name */}

        <div className="mb-4 px-2">
          <label
            className="block text-left text-gray-700 text-sm font-bold mb-2"
            htmlFor="segmentName"
          >
            Enter the Name of the Segment
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="segmentName"
            type="text"
            placeholder="Name of the Segment"
          />
        </div>

        <p className="px-2 py-2 text-left">
          To save your segment ,you need to add the schemas to build query{" "}
        </p>

        {/* name segment */}

        <div className="flex justify-end mb-4 px-4">
          <div className="flex items-center mr-4">
            <span className="bg-green-500  text-white rounded-full px-2 py-2   mr-2">
              <circle cx="12" cy="12" r="10" fill="green" />
            </span>
            <p className="text">-User Traits</p>
          </div>
          <div className="flex items-center">
            <span className="bg-pink-500 text-white rounded-full px-2 py-2   mr-2">
              <circle cx="6" cy="6" r="30" fill="pink" />
            </span>
            <p className="text">-Group Traits</p>
          </div>
        </div>

        {/* ==================  All schemas ==================== */}

        <div className="flex border-2 py-2  border-blue-800 w-[100%] flex-col gap-5 mb-4 px-4">
          {segments.length > 0 &&
            segments.map((el, i) => {
              return (
               
                <SegmentItem key={i} segments={el} onRemove={removeSegment} />
              );
            })}
          {/*  */}
          <div className="flex w-[100%] py-2  border-black items-center mr-4">
                <span className="bg-pink-500 text-white rounded-full px-2 py-2 mr-2">
                  <circle cx="12" cy="12" r="10" fill="green" />
                </span>

                <div className="relative w-[100%]">
                  <select className="border-2 rounded w-[100%]  py-2 px-3 text-gray-700 leading-tight ">
                    <option value="" disabled selected>
                      Last name
                    </option>
                  </select>
                </div>

                <div className="border-2 m-1 px-2 py-2">
                  <AiOutlineMinus />
                </div>
              </div>
        </div>

        {/* Add schema for add new ischema */}
        <div className="flex py-2  border-red-800 w-[100%] flex-col gap-5 mb-4 px-4">
           <SchemaItem
            value={selectedSchema}
            onChange={handleSchemaChange}
            selectedValue={selectedSchema}
           />
        </div>

        {/*  Add to link into blue box button like  */}

        <div className="flex py-2  border-red-800 w-[100%] flex-col gap-5 mb-4 px-4">
          <div className="flex w-[100%] py-2  border-black items-center mr-4">
            <span className=" text-white rounded-full px-2 py-2 mr-2">
              <IoIosAdd className="text-blue-400 text-2xl" />
            </span>

            <div
              onClick={addSegment}
              disabled={!selectedSchema}
              className="text-left underline relative w-[100%]"
            >
              Add new to segment
            </div>
          </div>

          {/*  */}
        </div>
            


        {/* last div */}
      </div>
    </>
  );
};

export default RightwideDrawer;
