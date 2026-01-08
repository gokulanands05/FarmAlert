import "./Connect.css";

const Connect = () => {
  return (
    <div className="connect-page">
      <div className="connect-container">

        {/* LEFT SIDE */}
        <div className="connect-info">
          <h1>Connect With Us</h1>
          <p>
            We help farmers, partners and users with guidance,
            onboarding and technical support.
          </p>

          <ul>
            <li>🌱 Farmer onboarding & support</li>
            <li>📄 Certified farmer verification</li>
            <li>🤝 Partnership & collaboration</li>
            <li>🛠 Technical assistance</li>
          </ul>

          <p className="info-note">
            Our team will contact you within 24–48 hours.
          </p>
        </div>

        {/* FORM */}
        <form className="connect-form">
          <h2>Send Your Request</h2>

          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Mobile Number" />

          <select>
            <option value="">Select Purpose</option>
            <option>Certified Farmer</option>
            <option>Support Request</option>
            <option>Partner / Vendor</option>
          </select>

          <input type="text" placeholder="Certification Number (if any)" />

          <textarea placeholder="Describe your request..." rows="4"></textarea>

          <button className="submit-btn">Send Request</button>

          <p className="privacy-text">
            Your information is safe with us.
          </p>
        </form>

      </div>
    </div>
  );
};

export default Connect;
