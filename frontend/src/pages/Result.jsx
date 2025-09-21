import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const { district, image, prediction } = state;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-6">Soil Analysis Result</h1>
      <img src={image} alt="Soil" className="w-96 h-96 object-cover rounded-2xl mb-6 shadow-lg" />
      <h2 className="text-2xl font-semibold mb-4">District: {district}</h2>
      <h2 className="text-2xl font-semibold text-green-700">Predicted Soil Type: {prediction}</h2>
      <button
        onClick={() => navigate("/soilform")}
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800"
      >
        Analyze Another
      </button>
    </div>
  );
};

export default Result;
