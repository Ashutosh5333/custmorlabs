import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { SchemaItem } from "../components/SchemaItem";
import { SegmentItem } from "../components/SegmentItem";
import { handleGetdata, handlePost } from "../Cutomfetch/Postmethod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RightwideDrawer = ({ togglePopup }) => {
  const [selectedSchema, setSelectedSchema] = useState("");
  const [segment_name, SetSegmentName] = useState("");
  const [segments, setSegments] = useState([]);
  const [data, SetData] = useState([]);
  const [showOverlay, setShowOverlay] = useState(true);

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
    
    if (selectedSchema === "") {
      toast.error("schema not selected");
    } else {
      setSegments([...segments, newSegment]);
      setSelectedSchema("");
    }
  };

  const removeSegment = (valueToRemove) => {
    const updatedSegments = segments.filter((segment) => segment.selectedSchema !== valueToRemove);
    setSegments(updatedSegments);
  };

  const payload = {
    segment_name: segment_name,
    schema: segments.map((segment) => ({
      [segment.selectedSchema]: segment.name,
    })),
  };

  //  console.log(segments,"segmeny")

  const handlePostRequest = () => {
    
    if (segment_name === "") {
      toast.error("Fill Name Segment  Field");
    } else if(segments.length == [] || ""){
      toast.error("Add schema");
    } else {
      handlePost(payload)
        .then((res) => {
          console.log("res", res);
         
          if (res?.message) {
            toast.success(res.message);
            SetSegmentName("");
            setSelectedSchema("");
            setSegments([]);
          }
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err?.message);
          SetSegmentName(null);
        });
    }
  };

  const handlenull = () =>{
    SetSegmentName("")
  }
  
  // useEffect(() => {
  //   handleGetdata()
  //     .then((res) => {
  //       SetData(res.data);
  //     })
  //     .catch((err) => {});
  // }, []) ;

  return (
    <>
      <div onClick={togglePopup} className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" style={{ display: showOverlay ? 'block' : 'none' }} />
   
      <div className="z-50 overflow-y-scroll h-full w-[70%] md:w-[40%] lg:w-[30%] absolute m-auto right-0 top-0 bg-white border-yellow-300 rounded shadow-lg">
        <div className="flex py-4 bg-[#47a6bc] items-center mb-4">
          <span className="text-white px-4 py-2 rounded mr-2">
            <MdOutlineArrowBackIos />
          </span>
          <h2 
         
          className="text-white font-normal">Saving Segment</h2>
        </div>

        <div className="mb-4 px-4">
          <label className="block text-left text-gray-700 text-sm font-normal mb-2" htmlFor="segmentName">
            Enter the Name of the Segment
          </label>
          <input
            onChange={(e) => SetSegmentName(e.target.value)}
            className="shadow text-sm border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="segmentName"
            type="text"
            value={segment_name}
            placeholder="Name of the Segment"
          />
        </div>

        <p className="px-4 py-2 font-normal text-sm text-left">
          To save your segment you need to add the schemas to build query
        </p>

        <div className="flex justify-end mb-4 px-6">
          <div className="flex items-center mr-4">
            <span className="bg-green-500 text-white rounded-full px-2 py-2 mr-2">
              <circle cx="6" cy="6" r="30" fill="green" />
            </span>
            <p className="text text-[.8rem]">- User Traits</p>
          </div>
          <div className="flex items-center">
            <span className="bg-pink-500 text-white rounded-full px-2 py-2 mr-2">
              <circle cx="6" cy="6" r="30" fill="pink" />
            </span>
            <p className="text text-[.8rem]">- Group Traits</p>
          </div>
        </div>

        <div className="px-2">
          <div className={`flex h-auto ${segments.length > 0 ? "border-2 " : ""} py-2 border-[#47a6bc] w-[100%] flex-col gap-5 mb-4 px-4`}>
            {segments.length > 0 &&
              segments.map((el, i) => {
                return (
                  <SegmentItem key={i} index={i} segments={el} onRemove={() => removeSegment(el.selectedSchema)} />
                );
              })}
          </div>

          <div className="flex py-2 border-red-800 w-[100%] flex-col gap-5 mb-4 px-4">
            <SchemaItem
              value={selectedSchema}
              onChange={handleSchemaChange}
              selectedValue={selectedSchema}
              onRemove={removeSegment}
              segments={segments}
            />
          </div>

          <div className="flex cursor-pointer border-red-800 w-[100%] flex-col gap-5 mb-4 px-4">
            <div className="flex w-[100%] py-2 border-black items-center mr-4">
              <span className="text-white rounded-full px-2 py-2 mr-2">
                <IoIosAdd className="font-semibold text-blue-400 text-2xl" />
              </span>
              <div onClick={addSegment} disabled={!selectedSchema} className="text-left text-blue-400 font-normal underline relative w-[100%]">
                Add new schema
              </div>
            </div>
          </div>
        </div>

        <div className="flex  mt-40  bg-gray-200 w-[100%] py-8 bottom-0 justify-start gap-4 px-4">
          <button onClick={handlePostRequest} className="bg-[#5fc7a1] text-[.8rem] font-semibold text-white px-4 py-2 rounded">
            Save the Segment
          </button>
          <button onClick={togglePopup} className="bg-white text-[.8rem] font-semibold text-red-400 px-4 py-2 rounded">
            Cancel
          </button>
        </div>

      </div>

      <ToastContainer />
    </>
  );
};

export default RightwideDrawer;
