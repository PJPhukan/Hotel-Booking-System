import React from 'react'
import './Testimonial.scss'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import TestImg from "../../assets/TestimonialImg.jpg"
const Testimonial = () => {
  return (
    <div className='testimonila-header'>
      <FaAngleLeft className='icon-left icon' />
      <div className="content-box">
        <p className="text">
          <span className="content-icon right"><RiDoubleQuotesL /></span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero voluptates iste, at itaque accusamus eveniet ipsum id facilis molestias adipisci amet hic, saepe temporibus corporis ipsam autem, nesciunt voluptatibus ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolore consectetur provident repudiandaemus eveniet ipsum id facilis molestias adipisci amet hic, saepe temporibus corporis ipsam autem, nesciunt voluptatibus ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolore consectetur provident repudianda possimus voluptatem, beatae unde quasi pariatur iure.<span className="content-icon left"><RiDoubleQuotesR /></span>
        </p>
        <h4 className="name">Alexandr Ivchenko</h4>
        <h5 className="position">Co-Founder</h5>
      </div>
      <div className="img-box">
        <img src={TestImg} alt="" />
      </div>
      <FaAngleRight className='icon-right icon' />
    </div>
  )
}

export default Testimonial
