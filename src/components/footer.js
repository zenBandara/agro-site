import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF,faInstagram,faYoutube,faTwitter,faLinkedinIn,} from '@fortawesome/free-brands-svg-icons';
import '../css/main.css'; 

const Footer = () => {
  return (
    <div>

      
      {/* Call To Action */}
      <aside className="cta-section" id="contact">
        <div className="cta-section__content">
          <h3 className="cta-section__content__title">Start with <span>Traverse today</span></h3>
          <p className="cta-section__content__description">
           Stay Connected with Traverse Subscribe for Exclusive VR Adventures
          </p>
        </div>
        <div className="cta-section__subscribe">
          <input
            type="email"
            className="cta-section__subscribe__input"
            placeholder="Enter your email"
          />
          <Link to="#" className="cta-section__subscribe__btn">
            Subscribe
          </Link>
        </div>
      </aside>
      {/* Main footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <img
            src="./assets/traverse-assets/assets-logo-footer.png"
            alt="CRAPPO company logo"
            className="main-footer__logo"
          />
          {/* Footer navs */}
          <nav className="main-footer-navbar">
            {/* Quick Link nav */}
            <ul className="main-footer-navbar__nav">
              
            </ul>
            {/* Resources link */}
            <ul className="main-footer-navbar__nav">
             
            </ul>
          </nav>
          {/* Payment systems */}
          <div className="payment-systems">
          </div>
          {/* Copy and social links */}
          <div className="copy-and-social">
            <h3 className="copy-and-social__copy">
              ©2021 TRAVERSE. All rights reserved
            </h3>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} className="fab" />
              <FontAwesomeIcon icon={faInstagram} className="fab" />
              <FontAwesomeIcon icon={faYoutube} className="fab" />
              <FontAwesomeIcon icon={faTwitter} className="fab" />
              <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
            </div>
          </div>
        </div>
      </footer>
      
      
    </div>
  );
};

export default Footer;
