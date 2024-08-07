import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/HomePage.css';
import Navbar from './navbar';
import Footer from './footer';
import MCQQuiz from '../Pages/User/MCQQuiz';

const Courses = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div style={{ color: 'black', padding: '5px' }}>
          <h1>Courses</h1>
          </div>
      
{/*      
      <div className='BG'>
        
      </div>

      <br/><br/><br/> */}

      {/* Video and PDF Boxes */}
      <section className="content-boxes">
        {/* YouTube Video Box */}
        <div className="content-box video-box">
          <h2>Artificial Intelligence Video</h2>
          <p>Faculty: Alex</p>
          
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v1u-vY6NEmM" // Replace with your actual video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* PDF Document Box */}
        <div className="content-box pdf-box">
          <h2>Artificial Intelligence</h2>
          <h3>Free course</h3>
          <a href="/assets/pdfs/Using explainable artificial intelligence journel (1).pdf" className="cta1-button" target="_blank" rel="noopener noreferrer">
          View Syllabus
          </a>
          <br></br>
          <h3>Earn a Certificate</h3>
          <Link to="/mcq-quiz" className="cta1-button">Start</Link>
        </div>
        
       
        <div className="content-box pdf-box">
          <h2>Machine Learning</h2>
          <a href="/assets/pdfs/Using explainable artificial intelligence journel (1).pdf" className="cta1-button" target="_blank" rel="noopener noreferrer">
          View Syllabus
          </a>
          <br></br>
          <Link to="/studentform" className="cta1-button">JOIN AT JUST $63</Link>
        </div>
        <div className="content-box pdf-box">
          <h2>IOT</h2>
          <a href="/assets/pdfs/Using explainable artificial intelligence journel (1).pdf" className="cta1-button" target="_blank" rel="noopener noreferrer">
          View Syllabus
          </a>
          <br></br>
          <Link to="/studentform" className="cta1-button">JOIN AT JUST $71</Link>
        </div>
        
        <div className="content-box pdf-box">
          <h2>JAVA</h2>
          <a href="/assets/pdfs/Using explainable artificial intelligence journel(1).pdf" className="cta1-button" target="_blank" rel="noopener noreferrer">
          View Syllabus
          </a>
          <br></br>
          <Link to="/studentform" className="cta1-button">JOIN AT JUST $45</Link>
        </div>
        <div className="content-box pdf-box">
          <h2>C++</h2>
          <a href="/assets/pdfs/Using explainable artificial intelligence journel (1).pdf" className="cta1-button" target="_blank" rel="noopener noreferrer">
            View Syllabus
          </a>
          <br></br>
          <Link to="/studentform" className="cta1-button">JOIN AT JUST $67</Link>
        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
