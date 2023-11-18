import React from 'react'
import './section7.css'
import image1 from '../../../assets/section7-box1.png'
import humanLogo from '../../../assets/sect7-humanLogo.png'
import image2 from '../../../assets/section7-box2.png'
import coinLogo from '../../../assets/sect7-coinLogo.png'
import image3 from '../../../assets/section7-box3.png'
import increLogo from '../../../assets/sect7-increLogo.png'
const Section7 = () => {
    return (
        <div className='section7'>
            <div className='section7-heading'>
                <h1>Derivates made simple in <span>3 Easy</span> Steps</h1>
            </div>
            <div className='section7-box'>
                <img src={image1} alt="section7-1" />
                <div className='small-container'>
                    <img src={humanLogo} alt="human-logo" />
                    <b>Create an Account</b>
                    <p>Register & Complete your <br />Verification in less than 2 minutes</p>
                    <button>Trade Now</button>
                </div>
            </div>
            <div className='section7-box2'>
                <img src={image2} alt="section7-2" />
                <div className='small-container2'>
                    <img src={coinLogo} alt="coin-logo" />
                    <b>Deposit Funds</b>
                    <p>Add funds quickly using a variety <br />of payment methods</p>
                    <button>Trade Now</button>
                </div>
            </div>
            <div className='section7-box3'>
                <img src={image3} alt="section7-3" />
                <div className='small-container3'>
                    <img src={increLogo} alt="increase-logo" />
                    <b>Become a Trader</b>
                    <p>Choose Your Trading Pair & Trade <br />Seamlessly</p>
                    <button>Trade Now</button>
                </div>
            </div>
        </div>
    )
}

export default Section7