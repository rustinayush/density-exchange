import React from 'react'
import './section8.css'
import image1 from '../../../assets/image109.png'
import image2 from '../../../assets/image110.png'
import image3 from '../../../assets/image111.png'
import image4 from '../../../assets/image112.png'
import image5 from '../../../assets/image113.png'
import image6 from '../../../assets/image114.png'
import image7 from '../../../assets/image115.png'
import owner from '../../../assets/owner.png'
const Section8 = () => {
    return (
        <div className='section8'>
            <div className='section8-top'>
                <h1>Backed by the Best.</h1>
            </div>
            <div className='section8-body'>
                <div className='top-of-body'>
                    <img src={image1} alt="logo1" />
                    <img src={image2} alt="logo2" />
                    <img src={image3} alt="logo3" />
                    <img src={image4} alt="logo4" />
                    <img src={image5} alt="logo5" />
                    <img src={image6} alt="logo6" />
                    <img src={image7} alt="logo7" />
                </div>
                <div className='bottom-of-body'>
                    <img src={owner} alt="ownerLogo" />
                </div>
            </div>
        </div>
    )
}

export default Section8