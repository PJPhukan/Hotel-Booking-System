import React from 'react'
import './Location.scss'
import LocationImg from "../../assets/companyLocation.png"
const Location = () => {
  return (
    <div className='location-header'>
      <div className="location-content">
        <div className="box">
          <h3 className="header">Location Of Our Hotels</h3>
          <h4 className="text">Lorem . Consequatur maxime quo perspiciatis quam quaerat sit,ciendis atque in quod.</h4>
        </div>
        <div className="form">
          <input type="email" placeholder='Email Address' />
          <button>Contact</button>
        </div>
      </div>
      <div className="img">
        <img src={LocationImg} alt="" />
      </div>
    </div>
  )
}

export default Location
