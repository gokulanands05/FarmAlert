import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // user data from localStorage (later backend la set pannuvom)
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
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

            {/* IF NOT LOGGED IN */}
            {!user && (
              <Link to="/get-started" className="nav-btn">Register</Link>
            )}

            {/* IF LOGGED IN → PROFILE IMAGE */}
            {user && (
              <div className="profile-wrapper">
                <img
                  src={user.photo || "https://i.pravatar.cc/150?img=3"}
                  alt="profile"
                  className="profile-img"
                  onClick={() => setOpen(!open)}
                />

                {open && (
                  <div className="profile-dropdown">
                    <p className="profile-name">{user.name}</p>
                    <button onClick={() => navigate("/profile")}>My Profile</button>
                    <button className="logout-btn" onClick={logout}>Logout</button>
                  </div>
                )}
              </div>
            )}

          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
