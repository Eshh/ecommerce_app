import React from 'react';
import './header-styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils.js';

const Header = ({logo , currentUser}) => {
    console.log(currentUser)
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
            {
                currentUser ? <div className = 'option' onClick ={() => auth.signOut()}>SIGN OUT</div>
               :
               <Link to='/login' className = 'option'>SIGN IN</Link>       
                    }

        </div>
    </div>
)
}

export default Header;