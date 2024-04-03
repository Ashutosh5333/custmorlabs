
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handlePost = (payload) => {
    fetch("http://localhost:8000/usercreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("POST response:", data);
      toast.success(data.message)
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error(error)
    });
  };


  export const handleGetdata = () => {
    return fetch("http://localhost:8000/getuser", {
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
  
  