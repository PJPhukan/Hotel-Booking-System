import React from 'react'
import './Popularitem.scss'
import { MdOutlineStar } from "react-icons/md";
const PopularItem = ({ item }) => {
    return (
        <div className='noteItem-header'>
            <img src={item.img_url} alt="" />
            <div className="text-box">
                <h3 className="address">{item.address}</h3>
                <h2 className="name">{item.name}</h2>
                <div className="price-rating">
                    <h5 className="price"><b>&#8377;{item.price}</b> Per Night</h5>
                    <div className="icon">
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                    </div>
                    <h5 className="rating">{item.rating}</h5>
                </div>
            </div>

        </div>
    )
}

export default PopularItem
