import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AgriAuth from "./components/AgriAuth/AgriAuth";
import ScrollToTop from "./components/ScrollToTop";
import Connect from "./pages/Connect/Connect";
import DemandOversupply from "./pages/DemandOversupply/DemandOversupply";
import DemandAnalysis from "./pages/DemandAnalysis/DemandAnalysis";
import WasteMonetization from "./pages/WasteMonetization/WasteMonetization";
import WarehouseRouting from "./pages/WarehouseRouting/WarehouseRouting";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
       

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-started" element={<AgriAuth />} />
         <Route path="/connect" element={<Connect />} />
         <Route path="/demand-oversupply" element={<DemandOversupply />} />
         <Route path="/demand-analysis" element={<DemandAnalysis />} />

         <Route path="/waste-monetization" element={<WasteMonetization />} />
         <Route path="/warehouse-routing" element={<WarehouseRouting />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
