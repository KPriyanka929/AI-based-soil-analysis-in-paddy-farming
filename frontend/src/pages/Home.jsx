import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover flex flex-col"
      style={{
        backgroundImage: "url('/agri.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar */}
      <motion.nav
        className="text-white p-6 flex items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo / Title placeholder */}
      </motion.nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8">
        <motion.h2
          style={{ textShadow: "0 0 8px #000, 0 0 16px #000, 0 0 24px #000" }}
          className="text-2xl font-bold text-gray-200 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          Soil Health Check for Paddy Farmers
        </motion.h2>

        {/* Options in horizontal flex */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Soil Analysis Option */}
          <motion.div
            onClick={() => navigate("/soilform")}
            className="cursor-pointer bg-white/80 backdrop-blur-md text-green-900 px-6 py-4 rounded-2xl shadow-lg w-80 hover:bg-white transition-all border-2 border-green-700"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-2xl font-bold mb-2"> Analyze Your Soil</h3>
            <p className="text-lg">
              Upload a photo for an instant AI-based soil health analysis.
            </p>
          </motion.div>

          {/* Organic Farming Option */}
          <motion.div
            onClick={() => navigate("/organic")}
            className="cursor-pointer bg-white/80 backdrop-blur-md text-green-900 px-6 py-4 rounded-2xl shadow-lg w-80 hover:bg-white transition-all border-2 border-green-700"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-2xl font-bold mb-2"> Organic Farming</h3>
            <p className="text-lg">
             
              Learn sustainable practices for better soil and long-term yield.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-green-900 text-white text-center p-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        📞 Farmer Helpline: 1800-180-1551
      </motion.footer>
    </div>
  );
}
