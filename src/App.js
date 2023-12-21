import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Partners from './components/partners';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Service from './components/services';
import Contact from './components/contact';
import FAQ from './components/FAQ';
import ScrollToTopButton from './components/ScrollToTopButton';
import FuiLoader from './components/FuiLoader'; // Import FuiLoader component
//import { AvatarCreator } from '@readyplayerme/react-avatar-creator';
import AvatarCreator from './components/AvatarCreator';

function App() {
  const [loading, setLoading] = useState(true);

  // Use state to track the currently loading route
  const [loadingRoute, setLoadingRoute] = useState(null);

  useEffect(() => {
    // Simulate loading completion after 2 seconds
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      clearTimeout(loadingTimer);
    }, 1000);
  }, []);

  return (
    <Router>
      <div>
      {loading ? ( // Display the loader while loading
       <FuiLoader />

      ) : (
        <div>
          {loadingRoute !== null ? null : <Navigation />}
          <Routes>
            <Route
              path="/"
              element={
                <RouteWithLoading
                  path="/"
                  component={<Home />}
                  loadingRoute={loadingRoute}
                  setLoadingRoute={setLoadingRoute}
                />
              }
            />
            <Route
              path="/partners"
              element={
                <RouteWithLoading
                  path="/partners"
                  component={<Partners />}
                  loadingRoute={loadingRoute}
                  setLoadingRoute={setLoadingRoute}
                />
              }
            />
            <Route
              path="/service"
              element={
                <RouteWithLoading
                  path="/service"
                  component={<Service />}
                  loadingRoute={loadingRoute}
                  setLoadingRoute={setLoadingRoute}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <RouteWithLoading
                  path="/contact"
                  component={<Contact />}
                  loadingRoute={loadingRoute}
                  setLoadingRoute={setLoadingRoute}
                />
              }
            />
            <Route
              path="/faq"
              element={
                <RouteWithLoading
                  path="/faq"
                  component={<FAQ />}
                  loadingRoute={loadingRoute}
                  setLoadingRoute={setLoadingRoute}
                />
              }
            />

            <Route
              path="/avatar"
              element={
                <RouteWithLoading
                  path="/avatar"
                  component={<AvatarCreator />}
                  loadingRoute={loadingRoute}
                  setLoadingRoute={setLoadingRoute}
                />
              }
            />


          </Routes>
          <ScrollToTopButton />
          {loadingRoute !== null ? null : <Footer />}
        </div>
      )}
      </div>
    </Router>
  );
}

// A component that wraps each route and handles loading
function RouteWithLoading({ path, component, loadingRoute, setLoadingRoute }) {
  useEffect(() => {
    setLoadingRoute(path);
    setTimeout(() => {
      setLoadingRoute(null);
    }, 5000); // Simulate route loading time
  }, [path, setLoadingRoute]);

  return loadingRoute === path ? <FuiLoader /> : component;
}

export default App;
