import React, { useState, useEffect } from 'react';

import Navbar from './navbar';
import Footer from './footer';
import Card from './card';

function About() {
  const features = [
    { title: "At Eduma, we are committed to enhancing the educational experience through innovative technology. Our Student E-Portal is designed to be the central hub for all academic and administrative needs, offering a comprehensive suite of features tailored to support students, parents, and educators."},
    { title: "Our mission is to empower students by providing a user-friendly, efficient, and accessible platform that streamlines academic management and communication. The E-Portal aims to foster a collaborative learning environment where students can thrive academically and personally."},
    { title: "We are dedicated to continuously improving our E-Portal to meet the evolving needs of our students and staff. Your feedback is invaluable to us as we strive to enhance our platform and support your educational success."}

  ];

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-header">
          <h1>About Us</h1>
          
        </div>
        
          <div style={{ color: 'white', padding: '10px' }}>
          </div>
        </div>
        
        
        <div className="card-container">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} />
          ))}
        </div>

        
        
        <Footer />
      </div>
    
  );
}

export default About;
