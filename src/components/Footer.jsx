import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Telephone: 123456789</li>
            <li>Email: Minimart@gmail.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="/about">Info</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help & Information</h3>
          <ul>
            <li>
              <Link to="/about">Info</Link>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <p className="footer-rights">
        &copy; 2025, All rights reserved by Minimart.
      </p>
    </footer>
  );
};

export default Footer;
