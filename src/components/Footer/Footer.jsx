import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <footer id="contact" className="footer"></footer>
       <div className="footer-top">
        <div className="footer-brand">
          <h2>FarmAlert</h2>
          <p>
            Smart agriculture platform delivering digital solutions,
            monitoring tools and insights for farmers.
          </p>
        </div>
         

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#" className="footer-link service">Services</a>
          {/* <a href="#" className="footer-link capabilities">Capabilities</a> */}
          {/* <a href="#" className="footer-link products">Products</a> */}
          <a href="#" className="footer-link about">About Us</a>
          

 
          {/* <a href="#contact" className="footer-link contact">Contact</a> */}
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p>Email: support@farmalert.com</p>
          <p>Phone: +91 90000 00000</p>
        </div>

        <div className="footer-social">
         <h4>Follow Us</h4>

  <div className="social-icons">
    <a href="#" className="social-icon instagram">
      <i className="fab fa-instagram"></i>
    </a>

    <a href="#" className="social-icon linkedin">
      <i className="fab fa-linkedin-in"></i>
    </a>

    <a href="#" className="social-icon twitter">
      <i className="fab fa-twitter"></i>
    </a>
  </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FarmAlert. All rights reserved.</p>
        <div className="footer-policy">
          <a href="/privacy-policy" className="footer-policy-link">Privacy Policy</a>
          <a href="/terms" className="footer-policy-link">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
