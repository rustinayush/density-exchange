import React from 'react'
import './section5.css'
import sect5Image from '../../../assets/section5.png'
const Section5 = () => {
    return (
        <div className='section5'>
            <div className='section5-heading'>
                <h1><span>Unlock</span> New Frontiers.</h1>
                <p>Are you a stock trader looking for new opportunities to make money? We got you covered!</p>
            </div>
            <div className='section5-container'>
                <div className='sect5-box1'>Same Strategies</div>
                <div className='sect5-box'>Same Indicators</div>
                <div className='sect5-box'>Better Leverage</div>
                <div className='sect5-box'>24x7 Trading</div>
            </div>
            <div className='section5-image'>
                <img src={sect5Image} alt="sect5_img" />
            </div>
        </div>
    )
}

export default Section5