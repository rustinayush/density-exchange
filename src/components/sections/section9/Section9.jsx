import React from 'react'
import './section9.css'
import card1 from '../../../assets/card1.png'
import card2 from '../../../assets/card2.png'
import card3 from '../../../assets/card3.png'
const Section9 = () => {
    return (
        <div className='section9'>
            <div className='section9-top'>
                <h1>Don’t take our word for it.</h1>
                <p>Hear it from our expert community of traders who have made <br />insane amounts in a short amount of time</p>
            </div>
            <div className='section9-bottom'>
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

export default Section9