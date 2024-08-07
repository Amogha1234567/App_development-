// src/components/Analytics.js

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';
//import './Analytics.css'; // Ensure you have an Analytics.css file for styling
import '../../Assets/CSS/Analytics.css';

const userData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 200 },
  { name: 'Apr', users: 278 },
  { name: 'May', users: 189 },
  { name: 'Jun', users: 239 },
  { name: 'Jul', users: 349 },
  { name: 'Aug', users: 200 },
  { name: 'Sep', users: 300 },
  { name: 'Oct', users: 400 },
  { name: 'Nov', users: 500 },
  { name: 'Dec', users: 600 },
];

const courseData = [
  { name: 'AI', students: 120 },
  { name: 'ML', students: 98 },
  { name: 'IOT', students: 86 },
  { name: 'DS', students: 99 },
  { name: 'C++', students: 85 },
  { name: 'JAVA', students: 130 },
];

const Analytics = () => {
  return (
    <div className="analytics">
      <h2>User Analytics</h2>
      <LineChart width={600} height={300} data={userData}>
        <Line type="monotone" dataKey="users" stroke="#ceb9a1" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <h2>Course Enrollment</h2>
      <BarChart width={600} height={300} data={courseData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="students" fill="#ceb9a1" />
      </BarChart>
    </div>
  );
};

export default Analytics;
