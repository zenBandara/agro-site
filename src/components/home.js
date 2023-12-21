import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../css/main.css';         
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Container, Grid, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import '../css/BenefitsSection.css';
import '../css/benefits.css';


const CryptoInfoDialog = ({ open, onClose, title, description, imageUrl }) => {
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ style: { borderRadius: "50px", filter: "drop-shadow(0 0 5px #00BF63)" } }}>
      <Paper elevation={3} className="custom-dialog-paper" style={{ backgroundColor: "#0f054c"  }}>
      {/* Image */}
      <div className="image-container">
        <img src={imageUrl} alt={title} className="dialog-image" />
      </div><br/>
      {/* Content */}
      <div className="dialog-content">
      <DialogTitle style={{ fontSize: "30px" , color: "#00BF63" , fontWeight: "bold" }}>{title}</DialogTitle><br/>
        <DialogContent>
          <Typography variant="body-1" style={{ fontSize: "16px" , color: "#ffffff" }}>{description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} style={{ fontSize: "24px" }}>
              <span class="fa-stack fa-x" >
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{ color: "#febebe" }}/>
                  <FontAwesomeIcon icon={faXmark} className="fa-stack-1x fa-inverse" style={{ color: "#d34545" }} />
              </span>
          </Button>
        </DialogActions>
      </div>
      </Paper>
    </Dialog>
  );
};


const jsonData = [
  {
    title: 'Musical show',
    description: 'A multi-day event that hosts multiple musical acts across different stages, catering to various genres of music. Join us for an unforgettable night!',
    imgURL: "./assets/event-images/event-1.jpeg",
  },
  {
    title: 'Fashion Show',
    description: 'A runway presentation where fashion designers showcase their latest clothing and accessory collections through live modeling.',
    imgURL: "./assets/event-images/event-2.jpeg",
  },
  {
    title: 'Dancing Show',
    description: 'Live dance performances featuring various styles such as ballet, contemporary, hip-hop, or traditional cultural dances.',
    imgURL: "./assets/event-images/event-3.jpg",
  },
  
];



function Home() {

    const [dialogOpen, setDialogOpen] = useState(false);
  
    // State to store the selected cryptocurrency info
    const [selectedCrypto, setSelectedCrypto] = useState({
      title: '',
      description: '',
      imageUrl: '',
    });
  
    const handleOpenDialog = (title, description, imageUrl) => {
      setSelectedCrypto({ title, description, imageUrl });
      setDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
    };


   //map events
    const [data, setData] = useState([]);

    useEffect(() => {
      // Simulate fetching data from a JSON file
      // In a real application, you would use an HTTP request to fetch the data.
      setData(jsonData);
    }, []);

    //add word limit
    function truncateDescription(description, wordLimit) {
      const words = description.split(' ');
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...'; // Add ellipsis if truncated
      }
      return description;
    }
    



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
  
  // -----  Main content -----
  ScrollReveal().reveal(".stats-section__reference", {
    duration: 2000,
    delay: 500,
    origin: "bottom",
    distance: "3rem",
  });
  
  ScrollReveal().reveal(".why-us-section__illustration", {
    duration: 2000,
    delay: 500,
    origin: "left",
    distance: "3rem",
  });
  
  ScrollReveal().reveal(".why-us-section__content", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "3rem",
  });
  
  ScrollReveal().reveal(".benefits-section__title", {
    duration: 2000,
    delay: 500,
    origin: "left",
    distance: "3rem",
  });
  
  ScrollReveal().reveal(".benefits-section__description", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "3rem",
  });
  
  ScrollReveal().reveal(".card-info", {
    duration: 2000,
    delay: 500,
    origin: "bottom",
    distance: "3rem",
  });
  
  ScrollReveal().reveal(".cryptocurrencies-section__title", {
    duration: 2000,
    delay: 500,
    origin: "left",
    distance: "3rem",
  });

  ScrollReveal().reveal(".cryptocurrencies-info-cards", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "4rem",
  });
  
  ScrollReveal().reveal(".info-card", {
    duration: 2000,
    delay: 500,
    origin: "bottom",
    distance: "4rem",
  });

  ScrollReveal().reveal(".info-card__title", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "3rem",
  });

  ScrollReveal().reveal(".info-card__icon", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "3rem",
  });

  ScrollReveal().reveal(".info-card__description", {
    duration: 2000,
    delay: 500,
    origin: "top",
    distance: "3rem",
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
  
  ScrollReveal().reveal(".grow-profit-article__graphic", {
    duration: 2000,
    delay: 500,
    origin: "right",
    distance: "3rem",
  });
  ScrollReveal().reveal(".grow-profit-article__content", {
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
    
    <div>
            
    <div className="main-container">
      {/* Main header */}
      <header className="main-header">
        <div className="header-container">
          
          
          {/* Header content */}
          <div className="main-header-content-container">
            <div className="main-header-content-principal">
              
              <h1 className="main-header-content-principal__title">
              Embark on <span className="span-a">Virtual Journeys</span>, Explore The World <br/>
                <span className="span-b"> from Anywhere</span>
              </h1>
              <p className="main-header-content-principal__description">
              Experience the Future of Exploration through Immersive VR Technology.
              </p>
              <Link to="/avatar" className="main-header-content-principal__btn">
                START HERE
              </Link>
                <span className="span-c">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </span>
            </div>
            <img
              src="./assets/traverse-assets/assets-img-1.svg"
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
          <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} className="stats-section__reference">
              
                <img
                  src="./assets/traverse-assets/assets-img-2.svg"
                  alt=""
                  className="stats-section__image"
                  style={{ width: '80%' }}
                />
              
            </Grid>

            <Grid item xs={12} sm={6} md={3} className="stats-section__reference">
                              
                <span class="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: "#252579", filter: "drop-shadow(0 0 12px #00aaff)" }} />                                 
                    <img src="./assets/traverse-assets/no-of-subscribers.png" alt=""  className="fa-stack-1x fa-inverse" style={{ width: "60px", paddingTop: "10px" }} />
                </span>                  
                <Typography variant="h3" className="stats-section__reference__title">
                  1M+
                </Typography>
                <Typography variant="body1" className="stats-section__reference__description">
                  Our Subscribers
                </Typography>
              
            </Grid>

            <Grid item xs={12} sm={6} md={3} className="stats-section__reference">
                              
                <span class="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: "#252579", filter: "drop-shadow(0 0 12px #00aaff)" }} />                                    
                    <img src="./assets/traverse-assets/user-engagement.png" alt=""  className="fa-stack-1x fa-inverse" style={{width: "40px", paddingLeft: "1px" }} />
                </span>                  
                <Typography variant="h3" className="stats-section__reference__title">
                  5M+
                </Typography>
                <Typography variant="body1" className="stats-section__reference__description">
                  Visitors Engagement
                </Typography>
              
            </Grid>

            <Grid item xs={12} sm={6} md={3} className="stats-section__reference">
                              
                <span class="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: "#252579", filter: "drop-shadow(0 0 12px #00aaff)" }} />                                    
                    <FontAwesomeIcon icon={faGlobe} className="fa-stack-1x fa-inverse" style={{ color: "#3671e9" }} />
                </span>                  
                <Typography variant="h3" className="stats-section__reference__title">
                  20
                </Typography>
                <Typography variant="body1" className="stats-section__reference__description">
                  Number of Services
                </Typography>
              
            </Grid>
          </Grid>
    </Container>
    </div>
    








    {/*
      <section className="benefits-section">
        <div className="benefits-section__container">
          <h1 className="benefits-section__title">Explore the <span className="span-a"> Benefits </span> of <span className="span-b">Traverse</span></h1>
          <p className="benefits-section__description">
            Embark on an immersive virtual journey with Traverse, where you can explore cities, shop online, access government services, and tour museums, all from the comfort of your home.
          </p>
          <div className="benefits-section__row">
            
            <div className="benefits-section__card">
              <div className="benefits-section__content">
                <h3 className="benefits-section__card-title">Immersive Virtual Tours</h3>
                <p className="benefits-section__card-description">
                  Description for Benefit 1 goes here.
                </p>
              </div>
              <div className="benefits-section__image">
                <img src="./assets/traverse-assets/benefit1.jpg" alt="Benefit 1" />
              </div>
            </div>

            
            <div className="benefits-section__card">
              <div className="benefits-section__content">
                <h3 className="benefits-section__card-title">Convenience at Your Fingertips</h3>
                <p className="benefits-section__card-description">
                  Description for Benefit 2 goes here.
                </p>
              </div>
              <div className="benefits-section__image">
                <img src="./assets/traverse-assets/benefit1.jpg" alt="Benefit 2" />
              </div>
            </div>
          </div>

          <div className="benefits-section__row">
            
            <div className="benefits-section__card">
              <div className="benefits-section__content">
                <h3 className="benefits-section__card-title">No Travel Hassles</h3>
                <p className="benefits-section__card-description">
                  Description for Benefit 3 goes here.
                </p>
              </div>
              <div className="benefits-section__image">
                <img src="./assets/traverse-assets/benefit1.jpg" alt="Benefit 3" />
              </div>
            </div>

            
            <div className="benefits-section__card">
              <div className="benefits-section__content">
                <h3 className="benefits-section__card-title">Safe Exploration</h3>
                <p className="benefits-section__card-description">
                  Description for Benefit 4 goes here.
                </p>
              </div>
              <div className="benefits-section__image">
                <img src="./assets/traverse-assets/benefit1.jpg" alt="Benefit 4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    */}



      <section className="benefit-section" id="products">

      <div className="benefits-section__container">
          <h1 className="benefits-section__title">Explore the <span className="span-a"> Benefits </span> of <span className="span-b">Traverse</span></h1>
          <p className="benefits-section__description">
            Embark on an immersive virtual journey with Traverse, where you can explore cities, shop online, access government services, and tour museums, all from the comfort of your home.
          </p>
          </div>

          <div className="benefit-info-cards">
            <div className="info-card">
              <h3 className="info-card__title">
                Convenience and Accessibility
              </h3>
              <img
                src="../assets/traverse-assets/benefits1.svg"
                alt=""
                className="info-card__icon"
              />
              <p className="info-card__description">
                Allows virtual exploration of diverse physical locations, providing accessibility 
                without time or location constraints.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-card__title">
                Interactive Learning and Information Sharing
              </h3>
              <img
                src="../assets/traverse-assets/benefits2.svg"
                alt=""
                className="info-card__icon"
              />
              <p className="info-card__description">
                Offers comprehensive knowledge about different places, fostering interactive learning and information sharing.
              </p>             
            </div>

            <div className="info-card">
              <h3 className="info-card__title">
                Entertainment and Recreation
              </h3>
              <img
                src="../assets/traverse-assets/benefits3.svg"
                alt=""
                className="info-card__icon"
              />
              <p className="info-card__description">
                Provides immersive gaming experiences and virtual movie watching for engaging entertainment and recreation.

              </p>           
            </div>

            <div className="info-card">
              <h3 className="info-card__title">
                Efficient Commercial Transactions
              </h3>
              <img
                src="../assets/traverse-assets/benefits4.svg"
                alt=""
                className="info-card__icon"
              />
              <p className="info-card__description">
                Facilitates streamlined commercial activities, enabling auctions and virtual shopping without physical presence.
              </p>           
            </div>

          </div>
         
        </section>








      {/* Features section */}
      <section className="features-section" id="features">
          
          <article className="invest-smart-article">
            <div className="invest-smart-article__content">
              <h3 className="invest-smart-article__content__title">Why you should choose <span>Traverse?</span></h3>
              <p className="invest-smart-article__content__description">
              Experience the Future of Exploration through Immersive VR Technology.
              </p>
              <Link to="/service" className="how-section-learn-more__btn">
                LEARN MORE
              </Link>
              <span className="span-e">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
            </div>
            <img
              src="../assets/traverse-assets/assets-img-3.svg"
              alt="Crypto stats"
              className="invest-smart-article__graphic"
            />
          </article>

          <article className="detailed-stats-article">
            <div className="detailed-stats-article__content">
              <h3 className="detailed-stats-article__content__title">
               How you are get on <span className="span-b">Traverse?</span>
              </h3>
              <p className="detailed-stats-article__content__description">
               You can join us by crafting your very own avatar during the sign-up process.
              </p>
              <Link to="/service" className="how-section-learn-more__btn">
                LEARN MORE
              </Link>
              <span className="span-e">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
            </div>
            <img
              src="./assets/traverse-assets/assets-img-4.svg"
              alt="Detailed statistics"
              className="detailed-stats-article__graphic"
            />
          </article>
          
        </section>
        
        </section>


        {/* Cryptocurrencies section */}
        <section className="cryptocurrencies-section" id="products">
          
          <div className="cryptocurrencies-info-cards">
            
            {data.map((item, index) => (
              <div className="info-card" onClick={() => handleOpenDialog(item.title, item.description, item.imgURL)}>
                <img
                  src={item.imgURL}
                  alt={item.title}
                  className="info-card__icon"
                />
          
                <h3 className="info-card__title">
                  {item.title}
                </h3>
                <p className="info-card__description">
                  {truncateDescription(item.description, 20)}
                </p>
          
                <Button className="info-card__btn">
                 Explore 
                 <span class="fa-stack fa-x" >
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                  <FontAwesomeIcon icon={faAngleRight} className="fa-stack-1x fa-inverse" style={{ color: "#467ddd" }} /> 
                 </span>
                </Button>       
              </div>
            ))}   
          </div>

            {/* Dialog Component */}
            <CryptoInfoDialog
              open={dialogOpen}
              onClose={handleCloseDialog}
              title={selectedCrypto.title}
              description={selectedCrypto.description}
              imageUrl={selectedCrypto.imageUrl}
            />

        </section>
        
      </main>      
      
    </div>
    
    </div>
  
  );
}

export default Home;
