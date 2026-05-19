import "./Footer.css";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

function Footer(){
  return(
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/ARUNIB143" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/arun-belagavi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
        <a href="mailto:arunib432@gmail.com">
          <FaEnvelope/>
        </a>
      </div>

      <p>© {new Date().getFullYear()} Arun. All rights reserved.</p>
      <p className="footer-love">Designed with love ❤️</p>
    </footer>
  );
}

export default Footer;