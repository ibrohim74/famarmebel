import React, {useState} from 'react';
import '../assets/css/nav.css'
import {NavLink} from "react-router-dom";
const Nav = () => {
    const [isActive , setIsActive] = useState(false)
    console.log(isActive)
    return (
        <div>
            <nav>
                <div className="nav-container">
                    <div className="nav-logo">
                        <NavLink to="/"><img src={require('../assets/img/famar_logo2_color.png')} alt="logo"/></NavLink>
                    </div>
                    <div className="nav-btn">
                        <button onClick={()=>setIsActive(!isActive)}><img src={require('../assets/img/Icon-open.webp')} alt=""/></button>
                    </div>
                    <div className={isActive ? "nav-menu active": 'nav-menu'}>
                        <ul className={isActive? "nav-ul active" :"test" }>
                            <li><NavLink to="/games">Our games</NavLink></li>
                            <li><NavLink to="/project">Projects</NavLink></li>
                            <li><NavLink to="/first">Support</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;