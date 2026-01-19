import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/admin/login",
        { email, password }
      );

      localStorage.setItem("adminToken", res.data.token);
      window.location.href = "/admin/dashboard";
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
