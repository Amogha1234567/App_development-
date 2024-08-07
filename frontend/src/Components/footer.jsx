import React from 'react';
import '../Assets/CSS/footer.css'; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/report">Report</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Information</h3>
          <p>123 Abc Street</p>
          <p>City, State, ZIP Code</p>
          <p>Email: info@abc.com</p>
          <p>Phone:+91 9834261708</p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 education Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
