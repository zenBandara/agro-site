import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material';
import '../css/main.css';

const jsonData = [
  {
    name: 'Sri Lanka Telecom',
    description: 'Sri Lanka Telecom is a leading telecommunications service provider in Sri Lanka. Sri Lanka Telecom is committed to connecting people and businesses, providing reliable communication solutions across the country.',
    imgURL: "./assets/service-img/service-1.jpg",
  },
  {
    name: 'IFS International',
    description: 'IFS International is a global enterprise software company that specializes in providing business software solutions. They offer industry-specific software for sectors such as manufacturing, aerospace, defense, and more.',
    imgURL: "./assets/service-img/service-2.png",
  },
  {
    name: 'JH International',
    description: 'JH International is a dynamic international consulting firm with expertise in various fields. They provide consulting services in areas like business development, strategy, and market research.',
    imgURL: "./assets/service-img/service-3.jpeg",
  },
];

function Partners() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    // In a real application, you would use an HTTP request to fetch the data.
    setData(jsonData);
  }, []);


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
  ScrollReveal().reveal(".features-section", {
    duration: 4000,
    delay: 1000,
    origin: "right",
    distance: "5rem",
  });
  ScrollReveal().reveal(".detailed-stats-article", {
    duration: 4000,
    delay: 1000,
    origin: "right",
    distance: "5rem",
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
              Explore Our Diverse <span className="span-a">Services</span>
              </h1>
              <p className="main-header-content-principal__description">
              Begin your virtual journey with Traverse, explore diverse services, and unlock potential.
              </p>
              <Link to="https://traverse.lk/" className="main-header-content-principal__btn">
                EXPLORE
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
    
    <main className="main-content">
    <section className="features-section" id="features">
  
      {data.map((item, index) => (
        <article className="detailed-stats-article"> 
        <div key={index} className="detailed-stats-article__content">
          <h3 className="detailed-stats-article__content__title"><span className="span-b">{item.name}</span></h3>
          <p className="detailed-stats-article__content__description">{item.description}</p>          
        </div>
        <img className="detailed-stats-article__graphic" src={item.imgURL} alt={item.name} />
        </article>
      ))}

    </section>
    </main>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>    
    </div>
    
  );
}

export default Partners;
