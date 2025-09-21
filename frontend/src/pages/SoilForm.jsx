import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SoilForm = () => {
  const navigate = useNavigate();

  const [district, setDistrict] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!district || !image) {
      alert("Please select a district and upload an image.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/result", {
          state: {
            district,
            image: URL.createObjectURL(image), // for preview
            prediction: data.prediction,
          },
        });
      } else {
        alert(data.error || "Prediction failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-start py-12 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#3D2412] mb-10 text-center drop-shadow-lg">
        Soil Health Analysis
      </h1>

      <div className="w-full max-w-3xl bg-white p-10 rounded-3xl shadow-2xl space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-2 text-green-800">District</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="p-4 text-lg rounded-xl border-2 border-green-300 focus:border-green-500"
            >
              <option value="">-- Select District --</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Solapur">Solapur</option>
              <option value="Satara">Satara</option>
              <option value="Sangli">Sangli</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-2 text-green-800">Upload Soil Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="p-4 text-lg rounded-xl border-2 border-green-300 focus:border-green-500 bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold text-2xl py-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
          >
            {loading ? "Analyzing..." : "Analyze Soil"}
          </button>
          
        </form>
        
      </div>
      <button
    onClick={() => navigate("/")} // change "/" if your home route is different
    className="w-full mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold text-xl py-3 rounded-2xl shadow-md transition-transform transform hover:scale-105"
  >
    Return to Home
  </button>
    </div>
  );
};

export default SoilForm;
