import { useNavigate } from "react-router-dom";
 
 
 import { useState } from "react";
import "./AgriAuth.css";

export default function AgriAuth({ onSuccess, onBack }) {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // later: real auth logic
    onSuccess();
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

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button type="button" onClick={handleSubmit}>
            Start Growing
          </button>
        </form>
      </div>

      {/* LOGIN */}
      <div className="form-container sign-in">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Farmer Login</h1>

          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button type="button" onClick={handleSubmit}>
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

 
 
