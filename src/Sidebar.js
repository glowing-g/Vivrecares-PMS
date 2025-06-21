import React from 'react'
import './App.css'
import appointmentHistory from './appointmentHistory'
import { Link } from 'react-router-dom'
import AppointmentRequest from './appointmentRequest'

export default function Sidebar() {
  return (
    <div className="sidebar-container">
        <div className='sidebar-list'>
            <div className='sidebar-text'>
                <li><Link to="/profile" className='sidebar-link'>Profile Info</Link></li>
                <li><Link to="/profile/appointments" className='sidebar-link'>Appointment History</Link></li>
                <li><Link to="/profile/appointment-request" className='sidebar-link'>Appointment Request</Link></li>
            </div>
        </div>
    </div>
  );
}
