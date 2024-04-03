import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { SchemaItem } from "../components/SchemaItem";
import { SegmentItem } from "../components/SegmentItem";

const RightwideDrawer = () => {
  const [selectedSchema, setSelectedSchema] = useState("");
  const [segment_name, SetSegmentName] = useState("");
  const [segments, setSegments] = useState([]);

  const handleSchemaChange = (e) => {
    setSelectedSchema(e.target.value);
  };

  const addSegment = () => {
    const formattedSchema = {
      [selectedSchema]:
        selectedSchema.charAt(0).toUpperCase() +
        selectedSchema.slice(1).replace("_", " "),
    };

    const newSegment = {
      id: Date.now(),
      name: formattedSchema[selectedSchema],
      schema: formattedSchema,
      selectedSchema,
    };
    setSegments([...segments, newSegment]);
    setSelectedSchema("");
  };

  console.log("segm",segments)

  const removeSegment = (id) => {
    const updatedSegments = segments.filter((segment) => segment.id !== id);
    setSegments(updatedSegments);
  };

  const payload = {
    segment_name: segment_name,
    schema: segments.map((segment) => ({
      [segment.selectedSchema]: segment.name,
    })),
  };
  console.log("payload", payload);

  return (
    <>
      <div className=" min-h-screen  right-0 top-0 w-[100%]  bg-white border-2  border-yellow-300   rounded shadow-lg">
        <div className="flex py-4  bg-blue-400 items-center mb-4">
          <span className=" text-white px-4 py-2 rounded mr-2">
            <MdOutlineArrowBackIos />
          </span>
          <h2 className="text-white font-semibold">Saving Segment</h2>
        </div>

        <div className="mb-4 px-4">
          <label
            className="block text-left text-gray-700 text-sm font-normal mb-2"
            htmlFor="segmentName"
          >
            Enter the Name of the Segment
          </label>
          <input
            onChange={(e) => SetSegmentName(e.target.value)}
            className="shadow text-sm  border rounded w-full py-3 px-3 text-gray-700 leading-tight  focus:shadow-outline"
            id="segmentName"
            type="text"
            placeholder="Name of the Segment"
          />
        </div>

        <p className="px-4 py-2 font-normal text-sm text-left">
          To save your segment you need to add the schemas to build query{" "}
        </p>

        <div className="flex justify-end mb-4 px-4">
          <div className="flex items-center mr-4">
            <span className="bg-green-500  text-white rounded-full px-2 py-2   mr-2">
              <circle cx="12" cy="12" r="10" fill="green" />
            </span>
            <p className="text text-sm">- User Traits</p>
          </div>
          <div className="flex items-center">
            <span className="bg-pink-500 text-white rounded-full px-2 py-2   mr-2">
              <circle cx="6" cy="6" r="30" fill="pink" />
            </span>
            <p className="text text-sm">- Group Traits</p>
          </div>
        </div>

        <div className="flex border-2 py-2  border-blue-400 w-[100%] flex-col gap-5 mb-4 px-4">
          {segments.length > 0 &&
            segments.map((el, i) => {
              return (
                <SegmentItem key={i} segments={el} onRemove={removeSegment} />
              );
            })}
        </div>

        <div className="flex py-2  border-red-800 w-[100%] flex-col gap-5 mb-4 px-4">
          <SchemaItem
            value={selectedSchema}
            onChange={handleSchemaChange}
            selectedValue={selectedSchema}
          />
        </div>

        <div className="flex py-2  border-red-800 w-[100%] flex-col gap-5 mb-4 px-4">
          <div className="flex w-[100%] py-2  border-black items-center mr-4">
            <span className=" text-white rounded-full px-2 py-2 mr-2">
              <IoIosAdd className="font-semibold  text-blue-400 text-2xl" />
            </span>
            <div
              onClick={addSegment}
              disabled={!selectedSchema}
              className="text-left  text-blue-400 font-semibold underline relative w-[100%]"
            >
              Add new schema
            </div>
            <div className="border-b-2 border-green-500 " />
          </div>
        </div>

        <div className="flex justify-start  gap-4 px-4">
          <button className="bg-green-400 text-sm font-semibold text-white px-4 py-2 rounded">
            Save the Segment
          </button>
          <button className="bg-gray-200 text-sm font-semibold text-red-400 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default RightwideDrawer;
