import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './header';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';
import LoginModal from "./LoginModal";
import Sidebar from "./Sidebar";
import ProfileLayout from "./profileLayout";
import Profile from "./Profile";
import AppointmentHistory from "./appointmentHistory";
import AppointmentRequest from "./appointmentRequest";
import Clinics from "./clinics";
import AdminLogin from "./AdminLogin";
import AdminPatients from "./adminPatients";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route 
        path="/profile" 
        element={
          <ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="appointments" element={<AppointmentHistory />}> </Route>
            <Route path="appointment-request" element={<AppointmentRequest />}></Route>
          </Route>
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <div>
                <h2>Admin Dashboard</h2>
                {/* Add admin dashboard content or links */}
                <a href="/admin/patients">View Patients</a>
              </div>
            ) : (
              <AdminLogin onLogin={() => setIsAdmin(true)} />
            )
          }
        />
        <Route
          path="/admin/patients"
          element={
            isAdmin ? <AdminPatients /> : <AdminLogin onLogin={() => setIsAdmin(true)} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
