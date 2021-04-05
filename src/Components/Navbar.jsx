import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav,setnav] = useState(false);

    const changeBackground = () =>{
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main'>
                {/* <img src={logo} alt="" /> */}
                <h1>GymWale</h1>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={1000}>HOME</Link></li>
                <li><Link to='about' smooth={true} duration={1000}>ABOUT</Link></li>
                <li><Link to='features' smooth={true} duration={1000}>SERVICES</Link></li>
                <li><Link to='gallery' smooth={true} duration={1000}>GALLERY</Link></li>
                <li><Link to='contact' smooth={true} duration={1000}>CONTACT US</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
