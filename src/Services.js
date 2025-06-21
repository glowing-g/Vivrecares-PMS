import React from "react";
import './App.css';
import Header from "./header";
import services1 from "./services1.jpg";
import services2 from "./services2.png";
import services3 from "./services3.png";
import services4 from "./services4.JPG";


function Services() {
    return (
        <div>
            <div id="services" className="services">
                <div className="services1">
                        <img src={services1} alt="Services" className="services-image1" />
                    <div className="services-textBox">
                        <h1 className="textService"> Doctor's Procedure Treatments</h1>
                        <h2 className="textServiceInfo">Explore our specialized doctor-recommended procedures and treatments designed to enhance your skin health and overall well-being.</h2>
                    </div>
                </div>
                <div className="services1">
                    <div className="services-textBoxInvert">
                        <h1 className="textService"> Cosmetic Treatments</h1>
                        <h2 className="textServiceInfo">Revitalize your skin from within with our IV Infusion Drip Collagen treatment, designed to promote a youthful glow and improve skin elasticity.</h2>
                    </div>
                    <img src={services2} alt="Services" className="services-image2" />
                </div>
                <div className="services1">
                        <img src={services3} alt="Services" className="services-image3" />
                    <div className="services-textBox">
                        <h1 className="textService"> Laser and Machine Treatments</h1>
                        <h2 className="textServiceInfo">Experience advanced skin rejuvenation with our Laser Machine Treatments, targeting blemishes, fine lines, and uneven skin tone for a smoother, clearer complexion.</h2>
                    </div>
                </div>
                <div className="services1">
                    <div className="services-textBoxInvert">
                        <h1 className="textService"> Facial Treatments</h1>
                        <h2 className="textServiceInfo">Refresh and nourish your skin with our Facial Treatments, tailored to cleanse, hydrate, and restore your natural glow.</h2>
                    </div>
                    <img src={services4} alt="Services" className="services-image2" />
                </div>
            </div>
            {/* <div id="clinics" className="clinics">
                <div className="clinic-text">
                    <h1 className="clinic-header">Clinic Branches</h1>
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
            </div> */}
        </div>
    );
}

export default Services;