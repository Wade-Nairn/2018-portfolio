import React from 'react'
import Link from 'gatsby-link'
const FontAwesome = require('react-fontawesome');

const SideNav = () => (
    <div className="side-nav">
        <div className={'logo'} >
            
        </div>
        <h1 className="nav-name">
            Wade<br />Nairn
        </h1>
        <ul className="nav-list">
            <li className="active"><Link to="/about/">ABOUT</Link></li>
            <li><Link to="/work/">WORK</Link></li>
            <li><Link to="/contact/">CONTACT</Link></li>
        </ul>
        <ul className="nav-socials">
            <li><FontAwesome
                    className='envelope'
                    name='envelope'
                    size='2x'
                    spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></li>
            <li><FontAwesome
                    className='codepen'
                    name='codepen'
                    size='2x'
                    spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></li>
            <li><FontAwesome
                    className='github'
                    name='github'
                    size='2x'
                    spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></li>
        </ul>
    </div>
)

export default SideNav