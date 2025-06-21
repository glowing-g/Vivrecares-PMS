import React, { useState } from 'react'
import './App.css'
import BranchDropdown from './BranchDropdown'
import ServiceDropdown from './ServiceDropdown'
import AppointmentType from './AppointmentType'
import Check from './check.png'

export default function AppointmentRequest() {
  const [date, setDate] = useState("")
  const [ time, setTime] = useState("")

  return (
    <div className='appointment-request-container'>
        <h1 className='section-header'> Create Appointment </h1>
            <div className='appointment-request-card' style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ccc", borderRadius: 8, background: "#fff" }}>
              <form>
                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="appointment-date" style={{ display: "block", marginBottom: 8 }}>
                    Date of Appointment
                  </label>
                  <input
                    type="date"
                    id="appointment-date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    style={{ padding: 10, width: "19rem" }}
                  />
                </div>
                <div>
                    <label for="appointment-time" style={{ display: "block", marginBottom: 8 }}>
                        Time of Appointment
                    </label>
                    <input type="Time"
                    id="appointment-time" 
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    style={{ padding: 10, width: "19rem" }}
                    >    
                    </input>
                <BranchDropdown /> 
                <ServiceDropdown />   
                <AppointmentType />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button style={{ background: "none", border: "none", padding: 0, cursor: "pointer", marginTop : 20 }}>
                    <img className='check-button'
                      src={Check}
                      alt="Button"
                      style={{ width: "80px", height: "80px", objectFit: "contain" }}
                    />
                  </button>
                </div>
              </form>
            </div>
    </div>
  )
}
