import React from 'react'
import "./Footer.scss"
import { RiInstagramLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa6";
import Payment from '../../assets/payments.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem, amet nisi ratione accusamus quam ad! veniam animi!</div>
                    <div className="icon">
                        <FaGoogle />
                        <FiYoutube />
                        <RiInstagramLine />
                    </div>
                </div>

                <div className="col">
                    <div className="title">Home</div>
                    <span className="text">Booking</span>
                    <span className="text">Facilities</span>
                    <span className="text">LLocation</span>
                    <span className="text">Contact</span>
                </div>
                <div className="col">
                    <div className="title">Help</div>
                    <span className="text">About Us</span>
                    <span className="text">Help Center</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">FAQs</span>
                </div>
                <div className="col">
                    <div className="title">Get the app</div>
                    <span className="text">iOS app</span>
                    <span className="text">Android app</span>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus .</div>
                        <img src={Payment} alt="" />
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
