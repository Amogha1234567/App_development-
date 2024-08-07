// src/pages/AdminProfile.js
import React,{useState} from 'react';
import { 
  PageContainer, 
  SidebarContainer, 
  SidebarLink, 
  ContentContainer, 
  Box, 
  ProfileSection, 
  ProfileItem 
} from '../Admin/Styles.js';

const Adminprofile = () => (
  <PageContainer>
    <SidebarContainer>
      <SidebarLink to="/admindashboard">Dashboard</SidebarLink>
      <SidebarLink to="/user">Users</SidebarLink>
      <SidebarLink to="/course">Courses</SidebarLink>
      <SidebarLink to="/analytics">Analytics</SidebarLink>
      <SidebarLink to="/settings">Settings</SidebarLink>
      <SidebarLink to="/">Logout</SidebarLink>
    </SidebarContainer>
    
    <ContentContainer>
      <Box>
        <ProfileSection>
          <h2>Personal Information</h2>
          <ProfileItem><strong>Name:</strong> Alex</ProfileItem>
          <ProfileItem><strong>Email:</strong> admin@example.com</ProfileItem>
          <ProfileItem><strong>Phone:</strong>767289342</ProfileItem>
        </ProfileSection>
      </Box>

      <Box>
        <ProfileSection>
          <h2>Account Settings</h2>
          <ProfileItem>
            <button style={{backgroundColor: "#ddd7d0",color:"black"}}>Change Password</button>
          </ProfileItem>
          <ProfileItem>
            <button style={{backgroundColor: "#ddd7d0",color:"black"}}>Enable Two-Factor Authentication</button>
          </ProfileItem>
        </ProfileSection>
      </Box>

      <Box>
        <ProfileSection>
          <h2>Notification Settings</h2>
          <ProfileItem>
            <label>
              <input type="checkbox" /> Email Notifications
            </label>
          </ProfileItem>
          <ProfileItem>
            <label>
              <input type="checkbox" /> In-app Notifications
            </label>
          </ProfileItem>
        </ProfileSection>
      </Box>

      <Box>
        <ProfileSection>
          <h2>Activity Overview</h2>
          <ProfileItem>Recent Activity 1</ProfileItem>
          <ProfileItem>Recent Activity 2</ProfileItem>
        </ProfileSection>
      </Box>
      
      
    </ContentContainer>
  </PageContainer>
);

export default Adminprofile;