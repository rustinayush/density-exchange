import React from 'react'
import './section4.css'
import sect4Img from '../../../assets/section4.png'
const Section4 = () => {
    return (
        <div className='section4'>
            <div className='section4-heading'>
                <h1>Explore the Markets like it is your <span>Playground.</span></h1>
                <p>Our low Fees Supercharge Your Profits</p>
            </div>
            <div className='section4-image'>
                <img src={sect4Img} alt="section4-logo" />
            </div>
            <button>Explore Market</button>
        </div>
    )
}

export default Section4