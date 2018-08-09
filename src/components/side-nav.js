import React from 'react'
import Link from 'gatsby-link'

const SideNav = () => (
    <div className="side-nav">
        <div className={'logo'} >
            
        </div>
        <h1 >
            Wade Nairn
        </h1>
        <p>
            Developer.
            Problem Solver.
            London.
        </p>
        <ul className="nav-list">
            <li><Link to="#about">ABOUT</Link></li>
            <li><Link to="#work">WORK</Link></li>
            <li><Link to="#contact">CONTACT</Link></li>
        </ul>
        <ul className="socials">
            <li></li>
            <li></li>
        </ul>
    </div>
)

export default SideNav