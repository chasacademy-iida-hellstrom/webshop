import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const About = () => {
  return (
    <div className="about-page">
      <section className="about-page-wrapper">
        <h1>About Us</h1>
        <h3>Contact</h3>
        <ul>
          <li>Telephone: 123456789</li>
          <li>Email: Minimart@gmail.com</li>
        </ul>

        <h3>Our Mission</h3>
        <p>
          Welcome to MiniMart, your go-to online store for high-quality products at unbeatable prices. We are committed
          to providing a seamless shopping experience with a carefully curated selection of products and fast, reliable
          delivery. At MiniMart, our mission is to make your everyday life easier by giving you access to top-quality
          products in the most convenient way possible. We value your trust and strive to offer exceptional customer
          service, ensuring that every purchase is smooth and satisfying.
          <br></br>
          Thank you for choosing MiniMart.
          <br></br>
          we're excited to be a part of your shopping journey!
        </p>
      </section>

      <h3>Help</h3>
      <ul>
        <li>How To Return</li>
        <li>Status Of My Online Order</li>
        <li>My Minimart Account</li>
      </ul>

      <br></br>
      <br></br>

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
  );
};

export default About;
