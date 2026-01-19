import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllRequests } from "../../services/requestApi";
import AdminNavbar from "../../components/admin/AdminNavbar";
import "../../styles/admin.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  // ✅ correct state structure
  const [total, setTotal] = useState(0);
  const [approved, setApproved] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchAllRequests(token);

        // ✅ count logic (frontend only)
        setTotal(data.length);
        setApproved(data.filter(r => r.status === "Approved").length);
        setRejected(data.filter(r => r.status === "Rejected").length);
        setPending(data.filter(r => r.status === "Pending").length);

      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      }
    };

    loadStats();
  }, [token]);

  // ✅ card click navigation
  const goTo = (status) => {
    if (status === "all") {
      navigate("/admin/requests");
    } else {
      navigate(`/admin/requests?status=${status}`);
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-container fade-in">
        <h2 className="admin-title">Admin Dashboard</h2>

        <div className="card-grid">
          <div className="card" onClick={() => goTo("all")}>
            <h3>Total</h3>
            <p>{total}</p>
          </div>

          <div
            className="card approved"
            onClick={() => goTo("Approved")}
          >
            <h3>Approved</h3>
            <p>{approved}</p>
          </div>

          <div
            className="card rejected"
            onClick={() => goTo("Rejected")}
          >
            <h3>Rejected</h3>
            <p>{rejected}</p>
          </div>

          <div
            className="card pending"
            onClick={() => goTo("Pending")}
          >
            <h3>Pending</h3>
            <p>{pending}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
