import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom'

const MenuItem = ({title , imageUrl , size ,  linkUrl, history ,match}) => {
    console.log(match)
    return (
        <div className = {`${size} menuItem`} onClick =  {() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);