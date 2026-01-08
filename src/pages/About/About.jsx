import PageWrapper from "../../components/Style/PageWrapper";
import "./About.css";

const About = () => {
  return (
    <PageWrapper>
      <section className="about-hero">
        <h1>About FarmAlert</h1>
        <p>
          FarmAlert is a smart agriculture platform designed to reduce waste,
          improve supply efficiency, and empower farmers using intelligent,
          data-driven solutions.
        </p>
      </section>

      {/* INFO CARDS */}
      <section className="about-content">

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To connect farmers, distributors, and markets using intelligent
            automation that reduces losses and improves decision making.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            Build a sustainable agricultural ecosystem with zero waste,
            transparency, and maximum value for every stakeholder.
          </p>
        </div>

        <div className="about-card">
          <h3>Why FarmAlert?</h3>
          <p>
            Smart alerts, optimized routing, reduced losses, and better income
            opportunities through technology.
          </p>
        </div>

        {/* NEW CARDS */}
        <div className="about-card">
          <h3>Who Can Use This?</h3>
          <p>
            Farmers, traders, warehouse owners, processors, cooperatives, and
            agri-startups looking to manage supply efficiently.
          </p>
        </div>

        <div className="about-card">
          <h3>How We Add Value</h3>
          <p>
            We analyze supply-demand gaps, guide surplus usage, and connect
            users to verified channels that reduce wastage and increase profit.
          </p>
        </div>

        <div className="about-card">
          <h3>Trust & Transparency</h3>
          <p>
            Our system focuses on reliable data, verified workflows, and
            transparent communication to build long-term trust.
          </p>
        </div>
        <div className="about-card">
  <h3>Data-Driven Decision Support</h3>
  <p>
    FarmAlert analyzes market trends, demand pressure, and supply flow to help
    farmers and partners take smarter decisions at the right time, reducing
    uncertainty and loss.
  </p>
</div>

<div className="about-card">
  <h3>Farmer Support & Guidance</h3>
  <p>
    Our platform provides guidance, alerts, and support channels so farmers can
    easily understand what actions to take, whom to contact, and how to benefit
    from available services.
  </p>
</div>


      </section>

      {/* FEEDBACK SECTION */}
      <section className="feedback-section">
        <h2>Share Your Experience</h2>
        <p className="feedback-desc">
          Your feedback helps us improve FarmAlert and serve farmers better.
          Tell us about your experience or expectations.
        </p>

        <form className="feedback-form">
          <div className="feedback-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="feedback-row">
            <select required>
              <option value="">Service Used</option>
              <option>Demand Oversupply Management</option>
              <option>Waste Monetization</option>
              <option>Warehouse Routing</option>
              <option>General Inquiry</option>
            </select>

            <select required>
              <option value="">Experience Level</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Needs Improvement</option>
            </select>
          </div>

          <textarea
            rows="4"
            placeholder="Share your feedback or suggestions..."
          ></textarea>

          <button type="submit" className="feedback-btn">
            Submit Feedback
          </button>
        </form>
      </section>
    </PageWrapper>
  );
};

export default About;
