import React from 'react';
import './header-styles.scss';
import { Link } from 'react-router-dom';

const Header = ({logo}) => {
return (
    <div className = 'header'>
        <Link to = '/' className = 'logo-container'>
            
                <img alt ='logoo' src= {logo}></img>
                
            </Link>
        <div className = 'options'>
            <Link to = '/shop' className = 'option'>
                SHOP
            </Link>
            <Link to = '/contact' className = 'option'>
                CONTACT
            </Link>

        </div>
    </div>
)
}

export default Header;