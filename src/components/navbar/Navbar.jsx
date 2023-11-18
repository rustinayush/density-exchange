import React from 'react'
import './navbar.css'
import logos from "../../assets/logo-aside.png"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logos} />
                <h4>density</h4>
            </div>
            <div className='top-nav'>
                <div className='text-container'>
                    <p>Careers</p>
                    <p>Blogs</p>
                    <p>Leaderboard</p>
                    <p>Fees</p>
                </div>
                <div className='trade-logo'>
                    <p>Trade Now</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar