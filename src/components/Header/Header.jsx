import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <div className="logo">
          FarmAlert <span className="leaf-icon">🍃</span>
        </div>

      <nav className="nav-links">
  <div className="nav-center">
<button onClick={() => goToSection("home")} className="nav-link">Home</button>
      <Link to="/about" className="nav-link">About</Link>
  <button onClick={() => goToSection("services")} className="nav-link">Services</button>    
<button onClick={() => goToSection("contact")} className="nav-link">Contact</button>  
          </div>

  <div className="nav-right">
    <Link to="/get-started" className="nav-btn">Register</Link>
  </div>
</nav>

      
      </div>
    </header>
  );
};

export default Header;
