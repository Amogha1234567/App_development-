import React from 'react';

import '../Assets/CSS/HomePage.css';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';


const Report = () => {
  return (
    
    <div className="home-container">
      <Navbar />
      
    <br></br>
        <div className='BG'>
        <div style={{ color: 'black', padding: '5px' }}>
          <h1>Report</h1>
          </div>
        </div>
<br/><br/><br/>

      <section id="services" className="services">
        <div className="service-card">
          
          <h3>Questions attended</h3>
          <Link to={'/dashboard'}>
          <a href="#services" className="cta1-button">
           View
          </a></Link>
        </div>
        <div className="service-card">
          <h3>Mark</h3>
          <Link to={'/dashboard'}>
          <a href="#services" className="cta1-button">
            View
          </a></Link>
        </div>
        <div className="service-card">
          <h3>Faculty review</h3>
          <Link to={'/dashboard'}>
          <a href="#services" className="cta1-button">
            View
          </a></Link>
        </div>
        <div className="service-card">
          <h3>Certificate</h3>
          <Link to={'/dashboard'}>
          <a href="#services" className="cta1-button">
            View
          </a></Link>
        </div>
        
      </section>
      
      
      
  <Footer />
    </div>
    
  );
};

export default Report; 