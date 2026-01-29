import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

/* 🌍 Website Layout */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/* 🌍 Website Pages */
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AgriAuth from "./components/AgriAuth/AgriAuth";
import Connect from "./pages/Connect/Connect";
import DemandOversupply from "./pages/DemandOversupply/DemandOversupply";
import DemandAnalysis from "./pages/DemandAnalysis/DemandAnalysis";
import WasteMonetization from "./pages/WasteMonetization/WasteMonetization";
import WarehouseRouting from "./pages/WarehouseRouting/WarehouseRouting";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import Profile from "./pages/Profile";


/* 🔐 Admin Pages */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRequests from "./pages/admin/AdminRequests";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* 🌍 PUBLIC WEBSITE ROUTES */}
        <Route
          path="/*"
          element={
            <>
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
                <Route path="/profile" element={<Profile />} />

              </Routes>

              <Footer />
            </>
          }
        />

        {/* 🔐 ADMIN ROUTES (NO HEADER / FOOTER) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/requests"
          element={
            <AdminProtectedRoute>
              <AdminRequests />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
