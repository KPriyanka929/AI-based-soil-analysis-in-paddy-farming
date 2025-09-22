import { Link } from "react-router-dom";

export default function OrganicFarming() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-10 text-center">
        Organic Farming Practices
      </h1>

      {/* Grid of farmer-friendly buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Jeevamrut */}
        <Link
          to="/organic/jeevamrut"
          className="bg-green-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Jeevamrut – Boost Soil Health
          </h2>
          <p className="text-lg text-gray-700">
            Feed friendly microbes to make soil fertile and crops stronger.
          </p>
        </Link>

        {/* Paddy-Husk Ash */}
        <Link
          to="/organic/paddy-husk-ash"
          className="bg-yellow-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-yellow-800 mb-2">
            Paddy-Husk Ash – Strengthen Plants
          </h2>
          <p className="text-lg text-gray-700">
            Add mineral-rich ash to improve plant strength and pest resistance.
          </p>
        </Link>

        {/* Fish & Duck in Fields */}
        <Link
          to="/organic/fish-duck-farming"
          className="bg-red-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Fish & Duck in Fields – Pest Control
          </h2>
          <p className="text-lg text-gray-700">
            Fish and ducks eat pests and weeds while fertilizing the field.
          </p>
        </Link>

        {/* Trap Crops & Companion Plants */}
        <Link
          to="/organic/trap-crops"
          className="bg-lime-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-lime-800 mb-2">
            Trap Crops – Protect Paddy
          </h2>
          <p className="text-lg text-gray-700">
            Plant crops around paddy to lure pests away from the main crop.
          </p>
        </Link>

        {/* Alternate Wetting & Drying */}
        <Link
          to="/organic/alternate-wetting-drying"
          className="bg-blue-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-2">
            Wet & Dry – Reduce Pests
          </h2>
          <p className="text-lg text-gray-700">
            Flood and dry fields alternately to control pests naturally.
          </p>
        </Link>

        {/* Certification & Direct Selling */}
        <Link
          to="/organic/certification-selling"
          className="bg-orange-100 p-8 rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold text-orange-800 mb-2">
            Certification & Selling – Earn More
          </h2>
          <p className="text-lg text-gray-700">
            Get certified and sell directly to earn better prices for rice.
          </p>
        </Link>
      </div>

      {/* Return to Home Button */}
      <Link
        to="/"
        className="mt-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold text-lg px-6 py-3 rounded-2xl shadow-md transition-transform transform hover:scale-105"
      >
        Return to Home
      </Link>
    </div>
  );
}
