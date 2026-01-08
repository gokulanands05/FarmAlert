import "./PrivacyPolicy.css";
import PageWrapper from "../../components/Style/PageWrapper";
const PrivacyPolicy = () => {
  return (
    <PageWrapper> 
    <div className="privacy-page">

      {/* HERO */}
      <section className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>
          Your trust matters to us. This policy explains how FarmAlert collects,
          uses, and protects your information.
        </p>
      </section>

      {/* CONTENT */}
      <section className="privacy-content">

        <div className="privacy-box">
          <h2>1. Information We Collect</h2>
          <p>
            We collect basic information such as your name, contact number,
            email address, location, and service-related inputs when you
            interact with FarmAlert.
          </p>
          <ul>
            <li>Farmer or organization details</li>
            <li>Contact information</li>
            <li>Service requests & feedback</li>
            <li>Usage and interaction data</li>
          </ul>
        </div>

        <div className="privacy-box">
          <h2>2. How We Use Your Information</h2>
          <p>
            The collected data is used only to improve agricultural services
            and provide better support.
          </p>
          <ul>
            <li>To connect farmers with suitable solutions</li>
            <li>To analyze demand–supply gaps</li>
            <li>To improve waste monetization strategies</li>
            <li>To provide customer support</li>
          </ul>
        </div>

        <div className="privacy-box">
          <h2>3. Data Protection & Security</h2>
          <p>
            We follow industry-standard practices to protect your data from
            unauthorized access, misuse, or loss.
          </p>
          <ul>
            <li>Secure storage and encrypted communication</li>
            <li>Limited internal access</li>
            <li>No sale of personal data to third parties</li>
          </ul>
        </div>

        <div className="privacy-box">
          <h2>4. Sharing of Information</h2>
          <p>
            Your information is shared only when required to deliver services
            such as logistics partners, processing units, or authorized service
            providers — strictly related to agriculture operations.
          </p>
        </div>

        <div className="privacy-box">
          <h2>5. User Rights</h2>
          <p>
            You have complete control over your data. You may request to:
          </p>
          <ul>
            <li>View or update your information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>

        <div className="privacy-box">
          <h2>6. Policy Updates</h2>
          <p>
            FarmAlert may update this Privacy Policy occasionally to reflect
            improvements or regulatory changes. Updates will be posted on this page.
          </p>
        </div>

        <div className="privacy-contact">
          <h3>Need Help or Have Questions?</h3>
          <p>
            If you have concerns about privacy or data usage, feel free to reach us.
          </p>
          <p><strong>Email:</strong> support@farmalert.com</p>
        </div>

      </section>
    </div>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
