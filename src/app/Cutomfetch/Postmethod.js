
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handlePost = (payload) => {
  return  fetch("https://nutty-clam-school-uniform.cyclic.app/usercreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log("POST response:", data);
      return data
      // toast.success(data.message)
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error(error)
    });
  };


  export const handleGetdata = () => {
    return fetch("https://nutty-clam-school-uniform.cyclic.app/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("GET response:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
  };
  
  