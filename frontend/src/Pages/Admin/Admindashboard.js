 // src/pages/AdminDashboard.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import '../../Assets/CSS/Admindashboard.css';

const userData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 700 },
  { name: 'May', users: 600 },
  { name: 'Jun', users: 800 },
];

const courseData = [
  { name: 'Jan', courses: 200 },
  { name: 'Feb', courses: 180 },
  { name: 'Mar', courses: 250 },
  { name: 'Apr', courses: 300 },
  { name: 'May', courses: 400 },
  { name: 'Jun', courses: 450 },
];

const COLORS = ['#ceb9a1', '#ceb9b3', '#ceb9d4', '#ceb9j6'];

const pieData = [
  { name: 'AI', value: 400 },
  { name: 'ML', value: 300 },
  { name: 'IOT', value: 300 },
  { name: 'Others', value: 200 },
];

const Admindashboard = () => (
  <div className="page-container">
    
    <div className="content-container">
      <div className="section">
        <h2 className="section-title">Overview</h2>
        <div className="box">
          <p>Total Users: 1500</p>
          <p>Total Courses: 200</p>
          <p>Active Users: 300</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">User Growth</h2>
        <div className="box">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#ceb9a1" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Courses Enrollment</h2>
        <div className="box">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="courses" fill="#ceb9a1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Course Distribution</h2>
        <div className="box">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#ceb9a1" dataKey="value">
  {
    pieData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))
  }
</Pie>
<Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
);

export default Admindashboard;