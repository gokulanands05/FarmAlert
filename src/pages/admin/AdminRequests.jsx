import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllRequests, updateRequestStatus } from "../../services/requestApi";
import AdminNavbar from "../../components/admin/AdminNavbar";
import "../../styles/admin.css";

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status"); // Pending / Approved / Rejected


  const token = localStorage.getItem("adminToken");

  const loadRequests = async () => {
    try {
      const data = await fetchAllRequests(token);
      setRequests(data);
    } catch (err) {
      alert("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, status) => {
  try {
    await updateRequestStatus(id, status, token);

    // 🔥 frontend state update
    setRequests((prev) =>
      prev.map((req) =>
        req._id === id ? { ...req, status } : req
      )
    );
  } catch (err) {
    alert("Action failed");
  }
};


useEffect(() => {
  const loadRequests = async () => {
    try {
      setLoading(true);

      const data = await fetchAllRequests(token);

      // 🔥 FRONTEND FILTERING
      const filteredRequests = status
        ? data.filter((r) => r.status === status)
        : data;

      setRequests(filteredRequests);
    } catch (err) {
      alert("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  loadRequests();
}, [status]);



 

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <>
      <AdminNavbar />
      <div className="admin-container fade-in">
        <h2 className="admin-title">Storage Requests</h2>

        {requests.length === 0 && <p>No requests found</p>}

        {requests.map((req) => (
          <div key={req._id} className="request-card">
            <p><b>Name:</b> {req.userName}</p>
            <p><b>City:</b> {req.city}</p>
            <p><b>Status:</b> <span className={`status ${req.status}`}>{req.status}</span></p>

            <div className="btn-group">
            <button
  className="approve-btn"
  onClick={() => handleAction(req._id, "Approved")}
>
  Approve
</button>

<button
  className="reject-btn"
  onClick={() => handleAction(req._id, "Rejected")}
>
  Reject
</button>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminRequests;
