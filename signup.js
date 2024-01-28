// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
  //   faPhone,
  //   faEnvelope,
  //   faMapMarkerAlt,
  // } from "@fortawesome/free-solid-svg-icons";
  // import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
  import React, { useState, useEffect } from "react";
  import "./signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "", 
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
   
    const animationTimeout = setTimeout(() => {
      setFormActive(true);
    }, 100);

    
    return () => clearTimeout(animationTimeout);
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className={`signup-back ${formActive ? "active" : ""}`}>
      <div className={`contact-container ${formActive ? "active" : ""}`}>
        <div className="left-content"></div>

        <div className={`ContactForm ${formActive ? "active" : ""}`}>
          <div className="right-content">
            <br></br>
            <br></br>
            <h2>SignUp</h2>
            <br>
            </br><br></br>
            <form onSubmit={handleSubmit}>
              <div className="name-adjust">
              <label htmlFor="name">Name:</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
 

              <div className="role-container">
              <div className="name-adjust">
  <label htmlFor="role">Role:</label>
  </div>
  <select
    id="role"
    name="role"
    value={formData.role}
    onChange={handleChange}
    required
  >
    <option value="">Select a role</option>
    <option value="fundProvider">Fund Provider</option>
    <option value="organizer">Organizer</option>
  </select>
</div>

             
<div className="name-adjust">
              <label htmlFor="email">Email:</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

          
             
<div className="name-adjust">
              <label htmlFor="password">Password:</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            
<div className="name-adjust">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

             

             
<div className="forgot">
              <a href='/'>Forgot Password?</a>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
