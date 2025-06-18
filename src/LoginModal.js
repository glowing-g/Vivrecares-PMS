import React, { useState } from "react"; 
import './App.css';
import logo from "./logo.png";
import { Link } from "react-router-dom";
import axios from 'axios';

function LoginModal({ open, children, onClose}) {
    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    if (!open) return null

    const handleChange =(event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);

        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Login failed');
          }

          // Store the token
          localStorage.setItem('token', data.token);
          onClose();
          // Optional: Redirect or update UI state
          
        } catch (error) {
          setError(error.message);
          console.error('Login error:', error);
        } finally {
          setIsLoading(false);
        }
      };

    return (
        <div>
            <div className="modal-overlay">
                <form className="modal-content" onSubmit={handleSubmit}>
                    <img src={logo} className="login-logo"/>
                    <button className="modal-close" onClick={onClose}>×</button>
                    <h2 className="login-header">Login</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div className="login-box">
                        <label for="username" className="label-text-top">Email </label>     
                        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="input-field" required placeholder="Email"></input>
                    </div>
                    <div className="login-box">
                        <label for="password" className="label-text">Password</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="input-field" required placeholder="Password"></input>       
                    </div> 
                    <div className="remember-forgot">
                    <input type="checkbox" id="remember"></input>
                    <label for="remember" className="label-text">Remember me?</label>
                    <div className="modal-footer">
                        <p className="new-to-vivre">New to VIVRE? <Link to="/register" className="modal-signup-link">Sign up</Link> here.</p>
                    </div>
                    <div className="login-container">
                    <button className="login-button" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                    </div>
                    </div>    
                </form>
            </div>
        </div>




    )




}

export default LoginModal;
