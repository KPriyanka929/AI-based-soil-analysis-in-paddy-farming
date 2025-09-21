import { Link } from "react-router-dom";

export default function OrganicFarming() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-10 text-center">
        Organic Farming Practices
      </h1>

      {/* Grid of farmer-friendly buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Crop Rotation */}
        <Link
          to="/organic/crop-rotation"
          className="bg-green-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-2"> Crop Rotation</h2>
          <p className="text-lg text-gray-700">
            Grow different crops each season to keep soil healthy & reduce pests.
          </p>
        </Link>

        {/* Composting */}
        <Link
          to="/organic/composting"
          className="bg-yellow-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-yellow-800 mb-2"> Composting</h2>
          <p className="text-lg text-gray-700">
            Turn waste into natural fertilizer for better soil & healthier crops.
          </p>
        </Link>

        {/* Pest Control */}
        <Link
          to="/organic/pest-control"
          className="bg-red-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-red-800 mb-2"> Natural Pest Control</h2>
          <p className="text-lg text-gray-700">
            Use friendly insects & organic sprays instead of harmful chemicals.
          </p>
        </Link>

        {/* Green Manure */}
        <Link
          to="/organic/green-manure"
          className="bg-lime-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-lime-800 mb-2"> Green Manure</h2>
          <p className="text-lg text-gray-700">
            Grow cover crops that add nutrients and protect the soil.
          </p>
        </Link>

        {/* Water Management */}
        <Link
          to="/organic/water-management"
          className="bg-blue-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-2"> Water Management</h2>
          <p className="text-lg text-gray-700">
            Use drip irrigation & rainwater harvesting to save water.
          </p>
        </Link>

        {/* Certification */}
        <Link
          to="/organic/certification"
          className="bg-orange-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-orange-800 mb-2">Organic Certification</h2>
          <p className="text-lg text-gray-700">
            Step-by-step help to get certified & access govt. schemes.
          </p>
        </Link>
      </div>
    </div>
  );
}
