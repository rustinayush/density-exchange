import React from 'react'
import './hero.css'
import heroImage from '../../assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='text-containers'>
                <div className='heading'>
                    <h1>It’s time to trade, the <span>future.</span></h1>
                </div>
                <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
            </div>
            <div className='hero-image'>
                <img src={heroImage} alt="hero-image" />
            </div>
        </div>
    )
}

export default Hero