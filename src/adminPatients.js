import React from 'react';
import './App.css';

export default function AdminPatients() {
  return (
    <div>
      <h2>Patients</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Profile</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                style={{ width: "48px", height: "48px", borderRadius: "50%" }}
              />
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>John Doe</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>john@example.com</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
