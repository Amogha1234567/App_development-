import React from 'react';
import '../Assets/CSS/ContactUs.css'; 
import Navbar from './navbar';
import ContactImage from '../Assets/Images/ContactImage.jpg'; // Make sure you have this image in your project

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact-us-container">
        <div className="contact-info">
          <h2>GET IN TOUCH</h2>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@domainname.com">info@abc.com</a>
            </div>
            <div className="contact-detail">
              <i className="fas fa-phone"></i>
              <span>+91 983426170</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Abc Street, Coimbatore</span>
            </div>
          </div>
          <div className="contact-image-container">
            <img src={ContactImage} alt="Contact" className="contact-image" />
          </div>
        </div>
        <div className="contact-form">
          <h2>SAY SOMETHING</h2>
          <form>
            <input type="text" placeholder="User ID" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Your Mail" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
