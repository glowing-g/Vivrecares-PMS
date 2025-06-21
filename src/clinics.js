import React from 'react'
import './App.css'
import branch1 from "./branch1.png";
import branch2 from "./branch2.png";

export default function clinics() {
  return (
    <div id="clinics" className="clinics">
                <div className="clinic-text">
                    {/* <h1 className="clinic-header">Clinic Branches</h1> */}
                </div>
                <div className="clinic-branch-card">
                    <img src={branch1} alt="Clinic Branch" className="clinic-image" />
                        <div className="clinic-branch-text">
                        <h1 className="clinic-branch-info">MOA Shore <br /> Branch</h1>
                        <p className="clinic-branch-address">Unit 2, Ground Floor, SM Mall of Asia, Seaside Blvd, <br /> Pasay City, Metro Manila<br /><br /> Opens Tuesday to Sunday</p>
                        </div>
                </div>
                <div className="clinic-branch-card-2">
                        <div className="clinic-branch-text">
                        <h1 className="clinic-branch-info">Valenzuela<br />Branch</h1>
                        <p className="clinic-branch-address">22 G. Lazaro Rd, Valenzuela,<br /> 1444 Metro Manila <br /><br />Opens Wednesday to Sunday</p>
                        </div>
                        <img src={branch2} alt="Clinic Branch2" className="clinic-image-2" />
                </div>
    </div>
  )
}
