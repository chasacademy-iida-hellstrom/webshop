import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  console.log("Footer is rendered");
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Kontakt uppgift</h3>
          <ul>
            <li>Telefon: 123456789</li>
            <li>Email: Minimart@gmail</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Om oss</h3>
          <ul>
            <li>
              <a href="#">Mer info</a>
            </li>
            <li>
              <a href="#">Mer info</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hjälp och information</h3>
          <ul>
            <li>
              <a href="#">Mer info</a>
            </li>
            <li>
              <a href="#">Mer info</a>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <p className="footer-rights">&copy; 2025, All rights reserved by Minimart.</p>
    </footer>
  );
};

export default Footer;
