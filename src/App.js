import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomeNavbar from './components/Navbar'; // New Navbar for home
import ArtGallery from './components/ArtGallery';
import Films from './components/Films';
import Me from './components/Me';
import Footer from './components/Footer'; // Import the Footer component
import Story from './components/Story';
import Home from './components/Home'; // Import the new Home component

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      <div className='main'>
        <Routes>
          {/* If on home page, show only Home */}
          <Route 
            path="/" 
            element={<Home />} 
          />
          
          {/* Other routes */}
          <Route 
            path="/*" 
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/art" element={<ArtGallery />} />
                  <Route path="/films" element={<Films />} />
                  <Route path="/story" element={<Story />} />
                  <Route path="/me" element={<Me />} />
                </Routes>
              </>
            } 
          />
        </Routes>
      </div>
      
      {/* Conditionally render Footer based on current route */}
      <footer>{location.pathname !== '/' && <Footer />}</footer>
      
    </div>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
