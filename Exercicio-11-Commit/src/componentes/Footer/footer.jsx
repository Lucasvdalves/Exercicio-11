import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/lucas-damasceno-821983169/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Lucasvdalves?" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:lucasalvesbh2017@gmail.com">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
