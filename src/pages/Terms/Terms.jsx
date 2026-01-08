import PageWrapper from "../../components/Style/PageWrapper";
import "./Terms.css";

const Terms = () => {
  return (
    <PageWrapper>
      <div className="terms-page">

        {/* HERO */}
        <section className="terms-hero">
          <h1>Terms & Conditions</h1>
          <p>
            These terms govern the use of FarmAlert services, ensuring fair,
            secure, and responsible usage of our agriculture platform.
          </p>
        </section>

        {/* CONTENT */}
        <section className="terms-content">

          <div className="terms-box">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using FarmAlert, you agree to comply with these
              Terms & Conditions. If you do not agree, please refrain from using
              the platform.
            </p>
          </div>

          <div className="terms-box">
            <h2>Use of Services</h2>
            <p>
              FarmAlert provides tools for demand–supply monitoring, waste
              reduction, routing, and agricultural insights.
            </p>
            <ul>
              <li>Users must provide accurate and truthful information</li>
              <li>Services should be used only for lawful agricultural purposes</li>
              <li>Misuse or manipulation of data is strictly prohibited</li>
            </ul>
          </div>

          <div className="terms-box">
            <h2>Farmer & Partner Responsibilities</h2>
            <p>
              Farmers, aggregators, and partners are responsible for ensuring
              the correctness of submitted data such as production volume,
              location, and availability.
            </p>
            <ul>
              <li>Maintain updated farm or business information</li>
              <li>Follow ethical agricultural practices</li>
              <li>Avoid false or misleading submissions</li>
            </ul>
          </div>

          <div className="terms-box">
            <h2>Service Availability</h2>
            <p>
              FarmAlert aims to provide uninterrupted access, but services may
              occasionally be unavailable due to maintenance, upgrades, or
              technical issues.
            </p>
          </div>

          <div className="terms-box">
            <h2>Data Usage & Privacy</h2>
            <p>
              All user data is handled in accordance with our Privacy Policy.
              Data is used strictly to improve service quality and agricultural
              outcomes.
            </p>
          </div>

          <div className="terms-box">
            <h2>Limitation of Liability</h2>
            <p>
              FarmAlert is not responsible for financial loss, crop failure, or
              market fluctuations resulting from external conditions or user
              decisions.
            </p>
          </div>

          <div className="terms-box">
            <h2>Changes to Terms</h2>
            <p>
              These terms may be updated periodically. Continued use of the
              platform implies acceptance of revised terms.
            </p>
          </div>

        </section>

        {/* CONTACT */}
        <section className="terms-contact">
          <h3>Need Clarification?</h3>
          <p>
            If you have any questions regarding these terms, feel free to reach
            out to our support team for clarification.
          </p>
        </section>

      </div>
    </PageWrapper>
  );
};

export default Terms;
