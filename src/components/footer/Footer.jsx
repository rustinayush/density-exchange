import React from 'react'
import "./footer.css"
import densityLogo from '../../assets/density-logo.png'
import fbImg from '../../assets/facebook.png'
import twitter from '../../assets/Twitter.png'
import linkedIn from '../../assets/linkedIn.png'
import insta from '../../assets/instagram.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <img src={densityLogo} alt="companyLogo" />
            </div>
            <div className='footer-body'>
                <div className='footer-body-top'>
                    <p>Blog</p>
                    <p>Fees</p>
                    <p>Leaderboard</p>
                    <p>Careers</p>
                    <p>ContactUs</p>
                    <p>PrivacyPolicy</p>
                </div>
                <div className='footer-body-btm'>
                    <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i <br />belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
                </div>
            </div>
            <div className='footer-bottom'>
                <img src={fbImg} alt="social-mediaLogo" />
                <img src={twitter} alt="social-mediaLogo" />
                <img src={linkedIn} alt="social-mediaLogo" />
                <img src={insta} alt="social-mediaLogo" />
            </div>
        </div>
    )
}

export default Footer