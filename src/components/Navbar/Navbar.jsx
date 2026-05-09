import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";


function Navbar(){
    const[menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <nav className="navbar">
                <h2 className="logo">Arun</h2>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>

                <div className="menu-icon" onClick={() => setMenuOpen(true)}>
                    ☰
                </div>

            </nav>

            {/* Overlay */}
            <div 
                className={`overlay ${menuOpen ? "show" : ""}`} 
                onClick={() => setMenuOpen(false)}>
            </div>
        
            <div className={`sidebar ${menuOpen ? "active" : ""}`}>
                <div className="close-container">
                    <div className="close-btn" onClick={() => setMenuOpen(false)}>
                        ✕
                    </div>
                </div>

                <div className="profile">
                    <img src="narutoimage.jpg" alt="profile" />
                    <h3>Arun</h3>
                </div>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/arun-belagavi" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ARUNIB143" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                { /* Links */}
                <div className="menu-links">
                    <a href="#home" onClick={() => setMenuOpen(false)}><FaHome /> Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}><FaUser /> About</a>
                    <a href="#resume" onClick={() => setMenuOpen(false)}><FaFileAlt /> Resume</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}><FaProjectDiagram /> Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}><FaEnvelope /> Contact</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;