import React from 'react'
import './section3.css'
import imageSec3 from '../../../assets/sect3.png'
const Section3 = () => {
    return (
        <div className='section3'>
            <div className='section3-heading'>
                <h1>Trade More. <span>Pay Less.</span></h1>
                <p>Our low Fees Supercharge Your Profits</p>
            </div>
            <div className='section3-image'>
                <img src={imageSec3} alt="section3-logo" />
            </div>
        </div>
    )
}

export default Section3