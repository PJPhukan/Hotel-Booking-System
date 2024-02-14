import React from 'react'
import "./Facilities.scss"
import { BsPersonWorkspace } from "react-icons/bs";
import { LuParkingCircle } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiWifiFill } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import { GrSwim } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";


const Facilities = () => {
  return (
    <div className='facilite-header'>

      <div className="text-box">
        <h2 className="header">We do our best facilities provide you</h2>

        <div className="header-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis molestiae minima inventore laudantium asperioremos quam deserunt?</div>

        <div className="btn-contact"><button>Contact Now</button></div>
      </div>
      <div className="icon-box">
        <div className="icon-sm-box">
          <BsPersonWorkspace />
          <h3 className="sm-box-text">Private Workspace</h3>
        </div>

        <div className="icon-sm-box">
          <LuParkingCircle />
          <h3 className="sm-box-text">Parking Area</h3>
        </div>

        <div className="icon-sm-box">
          <FaChalkboardTeacher />
          <h3 className="sm-box-text">Breakfast</h3>
        </div>


        <div className="icon-sm-box">
          <RiWifiFill />
          <h3 className="sm-box-text">Free Wifi</h3>
        </div>

        <div className="icon-sm-box">
          <MdElectricBolt />
          <h3 className="sm-box-text">Free Electricity</h3>
        </div>

        <div className="icon-sm-box">
          <GrSwim />
          <h3 className="sm-box-text">Swimming Pool</h3>
        </div>

        <div className="icon-sm-box">
          <CgGym />
          <h3 className="sm-box-text">Exercise Space</h3>
        </div>

        <div className="icon-sm-box">
          <BsThreeDots />
          <h3 className="sm-box-text">Other Service</h3>
        </div>
      </div>
    </div>
  )
}

export default Facilities
