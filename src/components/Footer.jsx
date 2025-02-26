import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <h3>Kontakt uppgift</h3>
            <ul>
              <li>Telefon: 123456789</li>
              <li>Email:Minimart@gmail</li>
            </ul>
          </div>
          <div>
            <h3> Om oss</h3>
            <ul>
              <li>
                <a href="#"> Mer info</a>
              </li>
              <li>
                <a href="#"> Mer info</a>
              </li>
            </ul>
          </div>
          <div>
            <h3> Hjälp och information</h3>
            <ul>
              <li>
                <a href="#">Mer info</a>
              </li>
              <li>
                <a href="#">Mer info</a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} color="#1877F2" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="#E4405F" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} color="#1DA1F2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>&copy; 2025, All rights reserved by Minimart.</p>
    </footer>
  );
};

export default Footer;
