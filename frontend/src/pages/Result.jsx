import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import soilInfo from "../soilinfo";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const { district, image, prediction } = state;

  // Map prediction strings to soilInfo keys
  const soilMap = {
    "alluvial soil": "alluvial",
    "black soil": "black",
    "red soil": "red",
    "clay soil": "clay",
  };

  // Normalize prediction
  const soilKey = soilMap[prediction?.toLowerCase()];
  const info = soilInfo[soilKey];

  return (
    <div className="min-h-screen flex flex-col items-center bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-6">Soil Analysis Result</h1>

      {/* Soil Image */}
      <img
        src={image}
        alt="Soil"
        className="w-96 h-96 object-cover rounded-2xl mb-6 shadow-lg"
      />

      {/* District & Prediction */}
      <h2 className="text-2xl font-semibold mb-2">
        District: <span className="text-green-900">{district}</span>
      </h2>
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Predicted Soil Type: {info?.name || prediction}
      </h2>

      {/* Soil Info Section */}
      {info ? (
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Key Issues</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            {info.issues.map((issue, idx) => (
              <li key={idx}>{issue}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold text-green-800 mt-6 mb-4">
            Solutions & Recommendations
          </h3>
          <div className="space-y-6">
            {Object.values(info.solutions).map((sol, idx) => (
              <div
                key={idx}
                className="p-6 border border-green-200 rounded-xl bg-green-50 shadow-md"
              >
                <h4 className="text-xl font-semibold text-green-900 mb-2">
                  {sol.problem}
                </h4>
                <p className="text-gray-700 mb-2">{sol.solution}</p>
                <p className="text-gray-800 font-medium">
                  <span className="text-green-700">Recommendations:</span>{" "}
                  {sol.recommendation.join(", ")}
                </p>
                <p className="text-gray-600 italic mt-2">{sol.action}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mt-4">
          No additional information available for this soil type.
        </p>
      )}

      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <button
          onClick={() => navigate("/soilform")}
          className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
        >
          Analyze Another
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
