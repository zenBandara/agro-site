import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material';
import '../css/main.css';

const Service = () => {

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
  ScrollReveal().reveal(".features-section__title", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "2rem",
  });
  ScrollReveal().reveal(".invest-smart-article__graphic", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "3rem",
  });
  ScrollReveal().reveal(".invest-smart-article__content", {
    duration: 2000,
    delay: 500,
    origin: "left",
    distance: "3rem",
  });
  
  ScrollReveal().reveal(".detailed-stats-article__content", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "3rem",
  });
  ScrollReveal().reveal(".detailed-stats-article__graphic", {
    duration: 2000,
    delay: 500,
    origin: "left",
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
    
    <div className="main-container">
      {/* Main header */}
      <header className="main-header">
        <div className="header-container">
          
          
          {/* Header content */}
          <div className="main-header-content-container">
            <div className="main-header-content-principal">
              
              <h1 className="main-header-content-principal__title">
               What are you going to <span className="span-a">Explore?</span>
              </h1>
              <p className="main-header-content-principal__description">
               Traverse offers a world of virtual wonders, where your adventure begins with bustling cities and leads to cutting-edge technology zones.
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
          
          <article className="invest-smart-article">
            <div className="invest-smart-article__content">
            <h3 className="detailed-stats-article__content__title">
              Virtual <span className='span-a'>City</span><span className='span-b'> Experience</span> 
              </h3>
              <p className="invest-smart-article__content__description">
               Step into a bustling metropolis like never before. Traverse's Virtual City offers a lifelike urban experience where you can explore iconic landmarks, vibrant neighborhoods, and the pulse of a dynamic cityscape from the comfort of your device.
              </p> 
            </div>
            <img
              src="./assets/traverse-assets/assets-city.JPG"
              alt="Crypto stats"
              className="invest-smart-article__graphic"
            />
          </article>
          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
            <h3 className="detailed-stats-article__content__title">
              Virtual <span className='span-a'>Shopping Centers</span><span className='span-b'> Experience</span> 
              </h3>
              <p className="detailed-stats-article__content__description">
               Immerse yourself in retail therapy at Traverse's Virtual Shopping Mall. Browse through an array of virtual stores, discover the latest fashion trends, shop for tech gadgets, and more. Experience the joy of shopping without leaving your home.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-shoppingMall.JPG"
              alt="Detailed statistics"
              className="detailed-stats-article__graphic"
            />
          </article>

          <article className="invest-smart-article">
            <div className="invest-smart-article__content">
            <h3 className="detailed-stats-article__content__title">
              Virtual <span className='span-a'>Government e-counters</span><span className='span-b'> Experience</span>
              </h3>
              <p className="invest-smart-article__content__description">
               Explore the future of governance in Traverse's Virtual E-Government Zone. Witness innovative digital solutions that enhance public services, streamline bureaucracy, and create a more efficient and accessible government for all citizens.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-Egovernment.JPG"
              alt="Crypto stats"
              className="invest-smart-article__graphic"
            />
          </article>
          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
            <h3 className="detailed-stats-article__content__title">
              Virtual <span className='span-a'>Gem City</span><span className='span-b'> Experience</span>
              </h3>
              <p className="detailed-stats-article__content__description">
               Discover a hidden gem within Traverse's Virtual Gem City. This enchanting locale is a testament to art, culture, and natural beauty. Explore stunning landscapes, captivating art installations, and serene gardens, all within this virtual haven.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-GemCity.JPG"
              alt="Detailed statistics"
              className="detailed-stats-article__graphic"
            />
          </article>

          <article className="invest-smart-article">
            <div className="invest-smart-article__content">
            <h3 className="detailed-stats-article__content__title">
              Virtual <span className='span-a'>Exhibition Center</span><span className='span-b'> Experience</span> 
              </h3>
              <p className="invest-smart-article__content__description">
               Dive into the world of art, science, and creativity at the Virtual Exhibition in Traverse. Experience curated displays of cutting-edge technology, captivating artwork, and thought-provoking exhibits. It's an opportunity to broaden your horizons and be inspired.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-exhibition-center.JPG"
              alt="Crypto stats"
              className="invest-smart-article__graphic"
            />
          </article>
          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
               Virtual <span className='span-a'>SLT eTeleshop</span><span className='span-b'> Experience</span>
              </h3>
              <p className="detailed-stats-article__content__description">
               Step into the future of telecommunications and technology with the Virtual SLT Mobitel Zone. Explore the latest innovations in communication, mobile connectivity, and digital services. Get hands-on with cutting-edge devices and experience the seamless connectivity that SLT Mobitel has to offer, all within this immersive virtual space.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-slt-eteleshop.JPG"
              alt="Detailed statistics"
              className="detailed-stats-article__graphic"
            />
          </article>

          <article className="invest-smart-article">
            <div className="invest-smart-article__content">
            <h3 className="detailed-stats-article__content__title">
              Virtual <span className='span-a'>Gaming Zone</span><span className='span-b'> Experience</span> 
              </h3>
              <p className="invest-smart-article__content__description">
              Immerse yourself in a world of virtual gaming excitement. Traverse's Gaming Zone offers a wide variety of virtual gaming experiences, from thrilling adventures to competitive challenges, ensuring endless entertainment for gamers of all ages.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-city.JPG"
              alt="Crypto stats"
              className="invest-smart-article__graphic"
            />
          </article>
          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
               Virtual <span className='span-a'>Movie Theater</span><span className='span-b'> Experience</span>
              </h3>
              <p className="detailed-stats-article__content__description">
              Enjoy the magic of the big screen from the comfort of your home. Traverse's Movie Theater lets you watch the latest blockbusters, timeless classics, and niche films in a virtual cinema setting. Grab your virtual popcorn and settle in for a cinematic experience like no other.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-movie-theater.JPG"
              alt="Detailed statistics"
              className="detailed-stats-article__graphic"
            />
          </article>

          <article className="invest-smart-article">
            <div className="invest-smart-article__content">
            <h3 className="detailed-stats-article__content__title">
              Virtual <span className='span-a'>Sri Lanka Tourist Map</span><span className='span-b'> Experience</span> 
              </h3>
              <p className="invest-smart-article__content__description">
              Embark on a virtual journey through the stunning landscapes and cultural treasures of Sri Lanka. Traverse's Sri Lanka Tourist Map provides a comprehensive exploration of this beautiful island nation. Discover pristine beaches, lush forests, historic sites, and more, all at your fingertips.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-city.JPG"
              alt="Crypto stats"
              className="invest-smart-article__graphic"
            />
          </article>
          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
               Virtual <span className='span-a'>Auction Center</span><span className='span-b'> Experience</span>
              </h3>
              <p className="detailed-stats-article__content__description">
              Bid, win, and collect unique virtual items and collectibles at the Traverse Auction Center. Participate in exciting virtual auctions where you can find rare treasures, art, and artifacts. It's a one-of-a-kind experience for collectors and enthusiasts.
              </p>
            </div>
            <img
              src="./assets/traverse-assets/assets-city.JPG"
              alt="Detailed statistics"
              className="detailed-stats-article__graphic"
            />
          </article>
          
        </section>
        </main>
        <div></div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default Service;
