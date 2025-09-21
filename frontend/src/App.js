import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";      
import SoilForm from "./pages/SoilForm"; 
import OrganicFarming from "./pages/OrganicFarming";
import CropRotation from "./pages/organic/CropRotation";
import Composting from "./pages/organic/Composting";
import PestControl from "./pages/organic/PestControl";
import GreenManure from "./pages/organic/GreenManure";
import WaterManagement from "./pages/organic/WaterManagement";
import Certification from "./pages/organic/Certification";

import Result from "./pages/Result";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soilform" element={<SoilForm />} />
        <Route path="/organic" element={<OrganicFarming />} />
        <Route path="/organic/crop-rotation" element={<CropRotation />} />
        <Route path="/organic/composting" element={<Composting />} />
        <Route path="/organic/pest-control" element={<PestControl />} />
        <Route path="/organic/green-manure" element={<GreenManure />} />
        <Route path="/organic/water-management" element={<WaterManagement />} />
        <Route path="/organic/certification" element={<Certification />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </Router>
  );
}

export default App;
