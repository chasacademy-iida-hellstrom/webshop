import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const About = () => {
  return (
    <div className="about-page">
      <div>
        <h1>Om oss</h1>
        <h3>Kontakt uppgift</h3>
        <ul>
          <li>Telefon: 123456789</li>
          <li>Email: Minimart@gmail.com</li>
        </ul>
      </div>
      <div>
        <h3>Hjälp och information</h3>
        <p>
          Välkommen till MiniMart, din pålitliga onlinebutik för kvalitetsprodukter till bra priser. Vi strävar efter
          att erbjuda en smidig shoppingupplevelse med noggrant utvalda varor och snabb leverans. Vårt mål är att
          förenkla din vardag genom att ge dig tillgång till de bästa produkterna på ett enkelt och bekvämt sätt. Tack
          för att du handlar hos oss!
        </p>
      </div>
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
  //         </div>
  //         <div className="footer-section">
  //           <h3>Om oss</h3>
  //           <ul>
  //             <li>
  //               <Link to="/about">Mer info</Link>
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="footer-section">
  //           <h3>Hjälp och information</h3>
  //           <ul></ul>
  //   ;
};

export default About;
