import React from 'react'
import './section12.css'
import card1 from '../../../assets/sect12-card1.png'
import card2 from '../../../assets/sect12-card2.png'
import card3 from '../../../assets/sect12-card3.png'
const Section12 = () => {
    return (
        <div className='section12'>
            <div className='section12-top'>
                <h1>Meet the <span>Visionaries</span> <br />behind Density.</h1>

            </div>
            <div className='section12-bottom'>
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
        </div>
    )
}

export default Section12