import React from 'react'
import './section6.css'
import section6Image from '../../../assets/section6.png'
const Section6 = () => {
    return (
        <div className='section6'>
            <div className='section6-heading'>
                <h1>Start Small. Earn Big.</h1>
                <p>Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager</p>
            </div>
            <div className='section6Img'>
                <img src={section6Image} alt="section6Logo" />
            </div>
        </div>
    )
}

export default Section6