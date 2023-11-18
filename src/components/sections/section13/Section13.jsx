import React from 'react'
import './section13.css'
import mobileImage from '../../../assets/vector.png'
import mobileInside from '../../../assets/mobile-inside.png'
const Section13 = () => {
    return (
        <div className='section13'>
            <div className='section13-top'>
                <h1>Get <span>started</span> now.</h1>
            </div>
            <div className='sect13-Container'>
                <img src={mobileImage} alt="mobile" className='image1' />
                <img src={mobileInside} alt="mobInside" className='image2' />
                <button>Start Trading!</button>
            </div>
        </div>
    )
}

export default Section13