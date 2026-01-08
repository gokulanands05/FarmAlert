import "./WasteMonetization.css";
const WasteMonetization = () => {
  return (
    <div className="wm-page">

      {/* HERO */}
      <section className="wm-hero">
        <h1>Waste Monetization</h1>
        <p>
          Turning agricultural surplus and waste into valuable economic
          opportunities through smart reuse, redistribution, and processing.
        </p>
      </section>

      {/* CONTENT */}
      <section className="wm-content">

        <div className="wm-box">
          <h2>What We Do</h2>
          <p>
            Our Waste Monetization system identifies excess or unsold agricultural
            produce and redirects it into productive reuse channels such as animal
            feed, bio-energy production, composting, or secondary food processing.
          </p>
        </div>

        <div className="wm-box">
          <h2>How It Works</h2>
          <ul>
            <li>Detects surplus crops and unsold produce</li>
            <li>Analyzes quality and usability</li>
            <li>Suggests best reuse or resale options</li>
            <li>Connects farmers with processors or buyers</li>
            <li>Reduces waste and improves income</li>
          </ul>
        </div>

        <div className="wm-box">
          <h2>Why Waste Monetization Matters</h2>
          <p>
            Agricultural waste leads to financial loss and environmental damage.
            Our system converts surplus into opportunity, supporting sustainability
            and circular agriculture.
          </p>
        </div>

        {/* CONNECT FORM */}
        <div className="wm-connect">
          <h3>Connect With Us</h3>
          <p>
            Share your waste or surplus details below. Our team will contact you
            with suitable monetization or reuse options.
          </p>

          <form className="wm-form">
            <div className="wm-row">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Mobile Number" required />
            </div>

            <div className="wm-row">
              <input type="email" placeholder="Email Address" required />
              <select required>
                <option value="">You are a</option>
                <option>Farmer</option>
                <option>Trader</option>
                <option>Food Processor</option>
                 <option>Distributor</option>
                <option>Aggregator</option>
                <option>Waste Collector</option>
                <option>Other</option>
              </select>
            </div>

            <div className="wm-row">
              <input
                type="text"
                placeholder="Type of waste / surplus (vegetables, fruits, etc.)"
                required
              />
              <input
                type="text"
                placeholder="Approx quantity (kg / tons)"
                required
              />
            </div>

            <div className="wm-row">
              <select required>
                <option value="">Condition of produce</option>
                <option>Fresh but unsold</option>
                <option>Slightly damaged</option>
                <option>Processing grade</option>
                <option>Only for compost / bio-energy</option>
              </select>

              <select required>
                <option value="">Availability</option>
                <option>Immediate</option>
                <option>Within 24 hours</option>
                <option>2–3 days</option>
                <option>Weekly</option>
              </select>
            </div>

            <textarea
              rows="4"
              placeholder="Additional details (optional)"
            ></textarea>

            <button type="submit" className="wm-btn">
              Submit Request
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default WasteMonetization;
