import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../../services/authApi";
import "./AgriAuth.css";

export default function AgriAuth() {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 REGISTER
  const handleRegister = async () => {
    try {
      const res = await registerUser({ name, email, password });

      // save login data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Registered successfully ✅");

      navigate("/"); 
      window.location.reload();
    } catch (err) {
      alert("Register failed ❌");
    }
  };

  // 🔹 LOGIN
  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login success ✅");

      navigate("/");
      window.location.reload();
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="auth-page">
      <div className={`container ${isRegister ? "active" : ""}`}>

        {/* BACK BUTTON */}
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>

        {/* REGISTER */}
        <div className="form-container sign-up">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Join the Farm</h1>

            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="button" onClick={handleRegister}>
              Start Growing
            </button>
          </form>
        </div>

        {/* LOGIN */}
        <div className="form-container sign-in">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Farmer Login</h1>

            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="button" onClick={handleLogin}>
              Enter Farm
            </button>
          </form>
        </div>

        {/* TOGGLE */}
        <div className="toggle-container">
          <div className="toggle">

            <div className="toggle-panel toggle-left">
              <h1>Welcome Back 🌾</h1>
              <button className="hidden" onClick={() => setIsRegister(false)}>
                Log In
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Grow With Us 🌱</h1>
              <button className="hidden" onClick={() => setIsRegister(true)}>
                Register
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
