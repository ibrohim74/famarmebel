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
                            <li><a href={'#home'}>ГЛАВНАЯ</a></li>
                            <li><a href="#about">О НАС</a></li>
                            <li><a href="#catalog">КАТАЛОГ</a></li>
                            <li className={'buy-button'}><NavLink to="/buy" >ЗАКАЗАТЬ</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;