import React from 'react'
import './About.scss'

import aboutImg from '../../assets/aboutHistry.jpg'
import Testimonial from './Testimonial'
const About = () => {
  return (
    <>
    <div className='about-header'>
      <div className="img-box">
        <img src={aboutImg} alt="" />
      </div>
      <div className="text-box">
        <h3 className="header">Discover Our Histry</h3>
        <p className="text-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam minus tenetur dolores! Saepe corporis libero qui ipsum natus vero non.
        </p>
        <p className="text-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ut eaque quas quasi odit! Est dolores facere quo  Provident ut eaque quas quasi odit! Est dolores facere quomaiores voluptate tenetur ea minus laudantium nesciunt?
        </p>
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
    <Testimonial/>
    </>
  )
}

export default About
