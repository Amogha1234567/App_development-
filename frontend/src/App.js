// import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import Login from "./Pages/User/login";
// import Register from "./Pages/User/register";
// import Home from "./Pages/User/home";


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login/>} />
//           <Route path="/register" element={<Register/>} />
//           <Route path="/" element={<Home/>}/>
//         </Routes>
//       </Router>
//       </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/User/home';
import Login from "./Pages/User/login";
import Register from "./Pages/User/register";
import Courses from './Components/Courses';
import Report from './Components/report';
import About from './Components/about';
import Contact from './Components/contact';
// import Navbar from './Components/navbar';
// import Footer from './Components/footer';

//import MCQQuiz from './Pages/User/MCQQuiz';
import MCQQuiz from './Pages/User/MCQQuiz';
import Profile from './Pages/User/Profile';
import Adminprofile from './Pages/Admin/Adminprofile';
// import Adminashboard from './Pages/Admin/Admindashboard';
import Admindashboard from './Pages/Admin/Admindashboard';
import User from './Pages/Admin/Users';
import Course from './Pages/Admin/Course';
import Analytics from './Pages/Admin/Analytics';
import Settings from './Pages/Admin/Settings';
import Dashboard from './Pages/User/Dashboard';
import PaymentPage from './Pages/User/PaymentPage';
import StudentForm from './Pages/User/StudentForm';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/report" element={<Report />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mcq-quiz" element={<MCQQuiz />} />
          <Route path="/profile" element={<Profile />}  />
          <Route path="/adminprofile" element={<Adminprofile/>}/>
          <Route path="/user" element={<User />}/>
          <Route path="/admindashboard" element={<Admindashboard />}/>
          <Route path="/course" element={<Course />}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/paymentpage" element={<PaymentPage/>}/>
          <Route path="/studentform" element={<StudentForm/>}/>
           </Routes>
      </div>
    </Router>
  );
}

export default App;
