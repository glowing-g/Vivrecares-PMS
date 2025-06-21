import React from 'react'
import { Router } from 'react-router-dom'
import sampleProfile from './sample-profile.jpg'
import './App.css'

export default function Profile() {
  return (
    <div id="profile" className='profile-container'>
        <h1 className="section-header">User Profile</h1>
            <div className='flex-row'>
            <div className='user-profile-container'>
                <div className='profile-info'>
                    <img src={sampleProfile} alt="Profile" className='profile-picture'/>
                </div>
                    <div className='profile-information'>
                        <h1 className='patient-name'> Leon Kennedy</h1>
                            <div  className='patient-info'>
                            <h2>Male - 23 years old</h2>
                            <h2> Binan City, Laguna</h2>
                            </div>
                        <div className='patient-contact-info'>
                            <p>gotnothing7@gmail.com</p>
                            <p>09265556790</p>
                        </div>
                    </div>
            </div>
            <div className='medical-history'>
                    <h1>Medical History</h1>
                        <h2>Allergies</h2>
                        <p>Peanuts and shellfish</p>
                    <h2>Previous Surgeries</h2>
                        <p>N/A</p>
                    <h2>Previous Aesthetic Procedures</h2>
                        <p>Buccal Fat Removal</p>
                    <h2>Current Skin Treatment</h2>
                        <p>N/A</p>
                </div>
            </div>
            <div className='consultation-notes-container'>
                <h1> Consultation Notes </h1>
                    <ul>
                        <li> Limit strenous exercise</li>
                        <li> Resume normal activies after 12 to 48 hrs </li>
                        <li> Proceed to follow up session next week </li>
                    </ul>
            </div>
     </div>   
  )
}
