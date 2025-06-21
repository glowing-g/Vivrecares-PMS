import React, { useState } from 'react'
import './App.css'

export default function AppointmentType() {
    const [ appointmentType, setAppointmentType ] = useState("");

    const appointmentTypes = [
        "Follow-up",
        "Initial Consultation",
        "Procedure Appointment",
        "Inquiry",
        "Reschedule",
    ]

  return (
    <div>
      <label for="appointment-type"
      style={{ display: "block", marginBottom: 8, marginTop : 10 }}
      >
        Type of Appointment
      </label>
      <select
      id='appointment-type'
      value={appointmentType}
      onChange={e=> setAppointmentType(e.target.value)}
      style={{ padding: 10, width: "100%" }}
      >
        <option value="">-- Select an Appointment Type --</option>
        {appointmentTypes.map((srv, idx) => (
          <option key={idx} value={srv}>{srv}</option>
        ))}
      </select>
    </div>
  )
}
