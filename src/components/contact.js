import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material';
import '../css/main.css';
import '../css/contact.css';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission, such as sending an email or saving to a database.
    console.log('Form Data:', formData);
  };


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
    ScrollReveal().reveal(".stats-section", {
      duration: 2000,
      delay: 500,
      origin: "top",
      distance: "2rem",
    });
    ScrollReveal().reveal(".contact-container", {
      duration: 2000,
      delay: 500,
      origin: "bottom",
      distance: "3rem",
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

    <div>

    <div className="main-container">

      {/* Main header */}
      <header className="main-header">
        <div className="header-container">
                  
          {/* Header content */}
          <div className="main-header-content-container">
            <div className="main-header-content-principal">
              
              <h1 className="main-header-content-principal__title">
               Get in Touch with <span className="span-a">Traverse</span>
              </h1>
              <p className="main-header-content-principal__description">
               If you have inquiries, feedback, or need assistance, please don't hesitate to connect with us using the contact details below.
              </p>
              <Link to="#" className="main-header-content-principal__btn">
                Contact Us
              </Link>
                <span className="span-c">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </span>
            </div>
            <img
              src="./assets/traverse-assets/about-us-img.svg"
              alt=""
              className="
              main-header-content-principal__illustration"
            />
          </div>
        </div>
      </header>

      <Grid item xs={12} sm={6}>
          <img
          src="./assets/traverse-assets/assets-arrow.svg"
          alt="arrow"
          className="arrow-a"
          />
      </Grid>
    
    {/* Main content */}
    <main className="main-content">
        {/* Why us section */}
        <section className="why-us-wrapper">
          {/* Stats */}
          <div className="stats-section">
            <div className="stats-section__reference">
            <span class="fa-stack fa-4x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: "#252579", filter: "drop-shadow(0 0 12px #00aaff)" }} />
            <FontAwesomeIcon icon={faPhone} className="fa-stack-1x fa-inverse" style={{ color: "#3671e9"}} />
            </span>
              <h3 className="stats-section__reference__title"><span>Call Us</span></h3>
              <p className="stats-section__reference__description">
                +94113254768
              </p>
            </div>
            <div className="stats-section__reference">
            <span class="fa-stack fa-4x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: "#252579", filter: "drop-shadow(0 0 12px #00aaff)" }} />
            <FontAwesomeIcon icon={faComment} className="fa-stack-1x fa-inverse" style={{ color: "#3671e9" }} />
            </span>
              <h3 className="stats-section__reference__title"><span>Chat Us</span></h3>
              <p className="stats-section__reference__description">
                +94113254768
              </p>
            </div>
            <div className="stats-section__reference">
            <span class="fa-stack fa-4x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: "#252579", filter: "drop-shadow(0 0 12px #00aaff)" }} />
            <FontAwesomeIcon icon={faEnvelope} className="fa-stack-1x fa-inverse" style={{ color: "#3671e9" }} />
            </span>
              <h3 className="stats-section__reference__title"><span>Email</span></h3>
              <p className="stats-section__reference__description">
                contact@traverseapp.com
              </p>
            </div>
          </div>
        </section>


      <div className="contact-container">
      <h1><span className='span-b'>Contact</span> <span className='span-a'>Us</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div><br/>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div><br/>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={8}
          />
        </div><br/>
        <button type="submit" className="main-header-navbar__login__register-btn">
          Submit
        </button>
      </form>
    </div>   
    </main>
   
    </div>

    </div>
  );
}

export default Contact;
