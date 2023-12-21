// ScrollToTopButton.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import '../css/ScrollToTopButton.css'; // Create a CSS file for styling

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  // Add a scroll event listener to show/hide the button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <button
      id="scrollToTopBtn"
      className={isVisible ? 'show' : 'hide'}
      onClick={scrollToTop}
    >
      <span>    
        <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "24px" }}/>
      </span>
    </button>
  );
}

export default ScrollToTopButton;
