import { useState, useEffect } from "react"
import React from 'react'
import "./Navber.scss"
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
const Navber = () => {
  //USESTATE
  //usestate for scrolled navber
  const [scrolled, setScrolled] = useState(false)
  //Show navber usestate
  const [showNav, setShowNav] = useState(false)
  //Show search usestate


  //handle navber scroll function
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 150) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="logo">
            <Link to="/"> <img src={logo} alt="TripFun" /></Link>
          </div>
          <div className="nav-btn" onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }}>
            <IoReorderThreeOutline id="menuicon" />
          </div>
          <div className={`nav-item ${showNav ? 'active' : ''}`}>
            <Link to="/facilities">
              <li>Facilities</li>
            </Link>
            <Link to="/booking">
              <li>Booking</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/location">
              <li>Location</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </div>
          <div className="login">
            <Link to="/login">
              <li>Login</li>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navber
