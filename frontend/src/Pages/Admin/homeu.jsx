import React, { useState, useEffect } from 'react';
import '../../Assets/CSS/home.css'; 
//import Navbar from '../../Components/navbar';
//import Navbar from '../../Components/navbar';
import Sidebar from '../Admin/Sidebar.js';
import Footer from '../../Components/footer';
import Card from '../../Components/card';
import johndoe from '../../Assets/Images/johndoe.jpg';
import janesmith from '../../Assets/Images/janesmith.jpg';
import bobjohnson from '../../Assets/Images/bobjohnson.jpg';
import image1 from '../../Assets/Images/home.jpg';
import image2 from '../../Assets/Images/home2.jpg';
import image3 from '../../Assets/Images/home3.jpg';

const images = [image1, image2, image3];

function Homeu() {
  const features = [
    { title: "Artificial Intelligence", description: "45" },
    { title: "Machine Learning", description: "50" },
    { title: "IOT", description: "35" },
  ];

  

  const faculty = [
    { name: "John Doe", Department: "AI", image: johndoe },
    { name: "Jane Smith", Department: "ML", image: janesmith },
    { name: "Bob Johnson", Department: "IOT", image: bobjohnson },
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
      <Sidebar />
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome to Eduma!</h1>
          <p>The beautiful thing about learning is that no one can take it away from you.</p>
        </div>
        <div className="background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
          {/* You can add some debugging here */}
          <div style={{ color: 'white', padding: '10px' }}>
          </div>
        </div>
        <h2>No Of Students</h2>
        <div className="card-container">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} />
          ))}
        </div>

        <h2>Progress</h2>
        <div className="card-container">
          {faculty.map((faculty, index) => (
            <Card key={index} title={faculty.name} description={faculty.Department} image={faculty.image} />
          ))}
        </div>
        
        
        
        <Footer />
      </div>
    </div>
  );
}

export default Homeu;
