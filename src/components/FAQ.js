import React, { useState , useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Grid } from '@mui/material';
import '../css/FAQ.css';

const FAQ = () => {
  // Define your FAQ data here
  const faqData = [
    {
      question: 'What is Traverse?',
      answer: 'Traverse is a web application that allows you to explore virtual views of cities, shopping malls, government zones, gem cities, and exhibitions.'
    },
    {
      question: 'How can I use Traverse?',
      answer: 'To use Traverse, simply visit our website and start exploring the virtual views. No downloads or installations are required.'
    },
    {
      question: 'Is Traverse free to use?',
      answer: 'Yes, Traverse is completely free to use. Enjoy the virtual experience without any cost.'
    },
    {
      question: 'How do I navigate within the virtual views?',
      answer: 'Use your mouse or touchpad to move the camera view. You can also use keyboard shortcuts for specific actions.'
    },
    {
        question: 'Are there system requirements to use Traverse?',
        answer: 'Traverse is accessible on most modern web browsers and devices. No special software or hardware is needed.'
    },
    {
        question: 'Is there a mobile app available for Traverse?',
        answer: 'Currently, Traverse is a web-based application and does not have a dedicated mobile app. It can be accessed through a mobile web browser.'
    },
    {
        question: 'How can I report an issue or provide feedback?',
        answer: 'You can reach out to our support team through the "Contact Us" page on our website. We value your feedback and will address any issues promptly.'
    },
    {
        question: 'Is my personal information safe when using Traverse?',
        answer: 'We take data privacy seriously. Traverse does not collect or store personal information without your consent. Please review our Privacy Policy for more details.'
    },
    {
        question: 'Can I share virtual views with others?',
        answer: 'Yes, you can share links to specific virtual views with friends and colleagues. Use the "Share" option within the application to generate shareable links.'
    },
      // Add more FAQ items as needed
  ];

  const handleScroll = () => {
    const mainNav = document.querySelector(".main-header__navbar");
    if (mainNav) {
      mainNav.classList.toggle("active", window.scrollY > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

  // Your code from scroll-reveal.js
  ScrollReveal().reveal(".main-header-navbar", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "2rem",
  });
  ScrollReveal().reveal(".main-header-content-principal", {
    duration: 2000,
    delay: 500,
    origin: "left",
    distance: "2rem",
  });
  ScrollReveal().reveal(".main-header-content-principal__illustration", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "2rem",
  });
  ScrollReveal().reveal(".arrow-a", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "2rem",
  });
  
  // ----------  Features section  -------------
  ScrollReveal().reveal(".faq-container", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "2rem",
  });
  ScrollReveal().reveal(".faq-caption", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "2rem",
  });
  ScrollReveal().reveal(".faq-item", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "2rem",
  });
  ScrollReveal().reveal(".cta-section", {
    duration: 2000,
    delay: 500,
    origin: "bottom",
    distance: "3rem",
  });

  // ---- Main footer -------
  ScrollReveal().reveal(".footer-container", {
    duration: 2000,
    delay: 500,
    origin: "left",
    distance: "3rem",
  });
  
  // ---- Attribution -----
  ScrollReveal().reveal(".attribution p", {
    duration: 2000,
    delay: 500,
    origin: "bottom",
    distance: "3rem",
  });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  

  return (
    <div className="main-container">
    <div className="faq-container">
      <h1 className="faq-caption">Explore Frequently Asked Questions</h1><br/>

        <Grid item xs={12} sm={6}>
            <img
            src="./assets/traverse-assets/assets-arrow.svg"
            alt="arrow"
            className="arrow-a"
            />
        </Grid>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default FAQ;
