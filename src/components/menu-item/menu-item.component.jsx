import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title , imageUrl , size}) => {
    return (
        <div className = {`${size} menuItem`}>
            <div className = 'background-image'  style = {{
            background : `url(${imageUrl})`
        }} ></div>
        <div className = 'content'>
        <h1 className = 'title'>{title}</h1>
            <span className='subTitle'>Shop now</span>
        </div>
           
            </div>
    )
}

export default MenuItem;