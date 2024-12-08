import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../assets/error.jpg";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={error} alt="" className="w-[800px]" />

      <div>
        <div className="mt-4 ">
          <button
            className="font-bold btn btn-warning"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
