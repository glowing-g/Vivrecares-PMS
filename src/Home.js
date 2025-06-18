import React from 'react';
import vivreFront from './VIVREFRONT.JPG';
import './App.css';
import logo from './logo.png';

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-image">
                    <img src={vivreFront} alt="Clinic"/>
                </div>
                <div className="home-text">
                    <div className="home-vivre">
                        <img src={logo} alt="Vivre Logo" className="logo" />
                    </div>
                    <p>Experience advanced skincare solutions with cutting-edge treatments designed for your beauty and wellness.</p>
                    <h1>Your journey to radiant skin starts here.</h1>
                </div>
            </div>
        </div>
    );







}

export default Home;
