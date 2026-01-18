import "./DemandOversupply.css";
import { useNavigate } from "react-router-dom";

const DemandOversupply = () => {
  const navigate = useNavigate();

  return (
    <div className="dos-page">
      {/* HERO SECTION */}
      <section className="dos-hero">
        <h1>Demand Oversupply Management</h1>
        <p>
          Smart detection and handling of market oversupply to protect farmers
          from losses and improve price stability.
        </p>

        <div className="access-btn-wrapper">
          <button
            className="access-btn"
            onClick={() => navigate("/demand-analysis")}
          >
            Access
          </button>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="dos-content">
        <h2>What is Demand Oversupply?</h2>

        <p>
          Demand oversupply happens when agricultural production exceeds market
          demand. This situation often leads to price drops, wastage, and heavy
          losses for farmers. Our system helps identify such risks early and
          provides decision support before losses occur.
        </p>

        <h3>How Our System Helps</h3>

        <ul>
          <li>✔ Detects early signals of market oversupply using data patterns</li>
          <li>✔ Monitors demand stress across regions and crop types</li>
          <li>✔ Alerts farmers before price crashes occur</li>
          <li>✔ Helps plan harvesting and selling time strategically</li>
          <li>✔ Supports better coordination between farmers and buyers</li>
        </ul>

        <p>
          By analyzing supply trends and market behavior, our platform helps
          farmers make informed decisions and reduce uncertainty during
          oversupply conditions.
        </p>
      </section>

      {/* CONNECT SECTION */}
      <section className="dos-contact" id="connect">
        <h2>Connect With Us</h2>
        <p>
          If you are facing demand oversupply issues or market stress, share your
          details below. Our team will guide you with the right support.
        </p>

        <form className="dos-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Mobile Number" required />

          <select required>
            <option value="">Select Your Role</option>
            <option>Farmer</option>
            <option>Farmer Producer Organization (FPO)</option>
            <option>Trader / Market Agent</option>
            <option>Agriculture Officer</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            placeholder="Farmer ID / Registration Number (if available)"
          />

          <textarea
            rows="4"
            placeholder="Describe your demand oversupply or market stress issue"
          ></textarea>

          <button type="submit" className="submit-btn">
            Request Support
          </button>
        </form>
      </section>
    </div>
  );
};

export default DemandOversupply;
