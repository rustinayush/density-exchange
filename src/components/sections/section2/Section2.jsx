import React from 'react'
import "./section2.css"
import image1 from '../../../assets/sect2-1.png'
import image2 from "../../../assets/sect2-2.png"
import image3 from '../../../assets/sect2-3.png'
const Section2 = () => {
    return (
        <div className='section2'>
            <div className='section2-box'>
                <img src={image1} alt="logo1" />
            </div>
            <div className='section2-box'>
                <img src={image2} alt="logo2" />
            </div>
            <div className='section2-box'>
                <img src={image3} alt="logo3" />
            </div>
        </div>
    )
}

export default Section2