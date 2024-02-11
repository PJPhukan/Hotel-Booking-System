import React, { useState } from 'react'
import "./HomeBanner.scss"
import { Link } from 'react-router-dom'
import HomeImg from "../../../assets/HomeImg.jpg"
import { FaRegPlayCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaCalendarDay } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import watchVideo from '../../../assets/watch.mp4'
import { RxCross2 } from "react-icons/rx";
const HomeBanner = () => {
  const [showVideo, setshowVideo] = useState(false)
  return (
    <div className='home-header'>
      <div className="container-box">
        <div className="text-box">
          <h1>Find Your Perfect Place To Stay</h1>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora minima, nam praesentium libero totam molestias dolor?</h4>
          <button className='video-click' onClick={() => { setshowVideo(true) }}>
            <span>{<FaRegPlayCircle  />}</span>Watch Video</button>
        </div>



        <div className="img-box">
          <img src={HomeImg} alt="" />

          {
            showVideo && <div className="video-box">
              <div class="video">
                <video src={watchVideo} controls autoplay ></video>
                <RxCross2 className='cross' onClick={setshowVideo(false)} />
              </div>
            </div>
          }
        </div>
        <div className="midle-upper-box">
          <li className='sp-box '>
            <span className="icon">
              {<IoLocation />}
            </span>
            <span>
              <span className='up-head'>Location</span>
              <span>United States</span>
            </span>
          </li>
          <li >
            <span className="icon">
              {<FaCalendarDay />}
            </span>
            <span>
              <span className='up-head'>Check In</span>
              <span>10 July,2020</span>
            </span>
          </li>
          <li className='none'>
            <span className="icon">
              {<FaCalendarDay />}
            </span>
            <span>
              <span className='up-head'>Check Out</span>
              <span>20 July,2021</span>
            </span>
          </li>
          <li className='none'>
            <span className="icon">
              {<HiUsers />}
            </span>
            <span>
              <span className='up-head'>Room For</span>
              <span>1 Room , 2 Guests</span>
            </span>
          </li>
          <li className='location-box '>
            <span className="icon">
              {<FaSearch />}
            </span>
            <span className='up-head'>Location</span>
          </li>

        </div>
      </div>
    </div >
  )
}

export default HomeBanner
