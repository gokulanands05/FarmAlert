import { Link, useNavigate } from "react-router-dom";
import "../../styles/admin.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="admin-navbar">
      <h2>FarmAlert Admin</h2>

      <div>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/requests">Requests</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
