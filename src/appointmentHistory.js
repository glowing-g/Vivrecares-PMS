import React from 'react'
import './App.css'
import Sidebar from './Sidebar'

export default function appointmentHistory() {
  return (
    <div>
      <h2 className='section-header' style={{ fontSize : '2rem'}}>Appointment History</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "24px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Remarks</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Service</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>COMPLETED</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Dermal Fillers</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>29-03-2025</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>P51,500</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Follow up</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Dermal Fillers</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>15-04-2025</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>P500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}