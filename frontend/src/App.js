import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SoilForm from "./pages/SoilForm";
import OrganicFarming from "./pages/OrganicFarming";
import Jeevamrut from "./pages/organic/Jeevamrut";
import Result from "./pages/Result";
import PaddyHuskAsh from "./pages/organic/PaddyHuskAsh";
import FishDuckFarming from "./pages/organic/FishDuckFarming";
import TrapCrops from "./pages/organic/TrapCrops";
import AlternateWettingDrying from "./pages/organic/AlternateWettingDrying";
import CertificationSelling from "./pages/organic/CertificationSelling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soilform" element={<SoilForm />} />
        <Route path="/organic" element={<OrganicFarming />} />
        <Route path="/organic/jeevamrut" element={<Jeevamrut />} />
        <Route path="/organic/paddy-husk-ash" element={<PaddyHuskAsh />} />
        <Route
          path="/organic/fish-duck-farming"
          element={<FishDuckFarming />}
        />
        <Route path="/organic/trap-crops" element={<TrapCrops />} />
        <Route
          path="/organic/alternate-wetting-drying"
          element={<AlternateWettingDrying />}
        />
        <Route
          path="/organic/certification-selling"
          element={<CertificationSelling />}
        />

        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
