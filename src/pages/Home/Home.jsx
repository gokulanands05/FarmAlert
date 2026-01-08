import PageWrapper from "../../components/Style/PageWrapper";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <PageWrapper>
      <div className="home">

        {/* HERO */}
       <section className="hero-section" id="home">
  <div className="hero-overlay">
    <h1 className="hero-title">Welcome to FarmAlert</h1>

    <p className="hero-subtitle">
      A smart agriculture platform that helps farmers monitor,
      manage and grow better using modern digital solutions.
    </p>

    <div className="hero-actions">
      
<Link to="/connect" className="connect-btn">
  Connect with Us
</Link>
    </div>
  </div>
</section>

{/* HERO RIGHT INFO BOX */}
<div className="hero-info-box">
  <h3>Our Services</h3>
  <p>
    Demand Oversupply Alert, Waste Monetization, Finding Warehouse  </p>

  <button
    className="hero-info-btn"
    onClick={() =>
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    More Info
  </button>
</div>


        
        

        {/* SERVICES */}
        <section className="services-section" id="services">
          <h2 className="section-title">Our Services</h2>

          <div className="cards-container">
            <div className="service-card">
              <h3>Demand Oversupply Alert</h3>
              <p>
                Real time detection of demand supply imbalance using smart alerts.
              </p>
              <Link to="/demand-oversupply" className="read-more-btn">
  Read More
</Link>
            </div>

            <div className="service-card">
              <h3>Waste Monetization</h3>
              <p>
                Redirect surplus food into reuse pathways automatically.
              </p>
              <Link to="/waste-monetization" className="read-more-btn">
  Read More
</Link>

            </div>

            <div className="service-card">
              <h3>Finding Warehouse</h3>
              <p>
               Smart warehouse discovery that saves time reduces spoilage and protects farmer income.
              </p>
              <Link to="/warehouse-routing" className="read-more-btn">
  Read More
</Link>
            </div>
          </div>
        </section>

      </div>
    </PageWrapper>
  );
};

export default Home;
