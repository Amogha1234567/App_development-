import React, { useState, useEffect } from 'react';
import '../../Assets/CSS/home.css'; 
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer';
import Card from '../../Components/card';
import johndoe from '../../Assets/Images/johndoe.jpg';
import janesmith from '../../Assets/Images/janesmith.jpg';
import bobjohnson from '../../Assets/Images/bobjohnson.jpg';
// import image1 from '../../Assets/Images/home.jpg';
import image2 from '../../Assets/Images/home2.jpg';
import image3 from '../../Assets/Images/home3.jpg';
import { Link } from 'react-router-dom';

const images = [ image2, image3];

function Home() {
  const features = [
    { title: "User Authentication and Security", description: "secure username and password." },
    { title: "Dashboard", description: "Easy to access.  " },
    { title: "Academic Information", description: "syllabi, lecture notes and assignments." },
  ];

  const courses = [
    { title: "Artificial Intelligence" },
    { title: "Machine Learning"},
    { title: "Internet Of Things" },
  ];

  const faculty = [
    { name: "Alex", Department: "AI", image: johndoe },
    { name: "Ram", Department: "ML", image: janesmith },
    { name: "Sibi", Department: "IOT", image: bobjohnson },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        {/* <div className="home-header">
          
        </div> */}
        <div className="background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        
          {/* You can add some debugging here */}
          <div style={{ color: 'black', padding: '5px' }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h1>Welcome to Eduma!</h1>
          <p>The beautiful thing about learning is that</p> 
           <p> no one can take it away from you.</p>
          </div>
        </div>
        <h2>Features</h2>
        <div className="card-container">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} />
          ))}
        </div>

        <h2>Faculty</h2>
        <div className="card-container">
          {faculty.map((faculty, index) => (
            <Card key={index} title={faculty.name} description={faculty.Department} image={faculty.image} />
          ))}
        </div>
        
        <h2>Courses</h2>
        <div className="card-container">
        
          {courses.map((courses, index) => (
            <Card key={index} title={courses.title} description={courses.description} />
          ))}
          <Link to={'/courses'}>  <button>Explore </button></Link>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default Home;
