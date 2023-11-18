import React from 'react'
import './section10.css'
import imageSpeaker from '../../../assets/speaker.png'
import card1 from '../../../assets/sect10-card1.png'
import card2 from '../../../assets/sect10-card2.png'
import card3 from '../../../assets/sect10-card3.png'
const Section10 = () => {
    return (
        <div className='section10'>
            <div className='section10-top'>
                <img src={imageSpeaker} alt="speaker" />
                <h1>Earn Money. <span>The Easy Way.</span></h1>
                <p>No Complexity of Trading Fee, generate volume and win</p>
            </div>
            <div className='section10-bottom'>
                <div className='card'>
                    <img src={card1} alt="card1" />
                </div>
                <div className='card'>
                    <img src={card2} alt="card2" />
                </div>
                <div className='card'>
                    <img src={card3} alt="card3" />
                </div>
            </div>
            <button>Start Earning Now</button>
        </div>
    )
}

export default Section10