import React from 'react';
import './homepage.styles.scss'

export  const HomePage = () => {
    return (
        <div className = 'homepage'>
        <div className = 'directoryMenu'>

            <div className = 'menuItem'>
        <div className = 'content'>
        <h1 className = 'title'>Laptops</h1>
            <span className='subTitle'>Shop now</span>
        </div>
           
            </div>

            <div className = 'menuItem'>
        <div className = 'content'>
        <h1 className = 'title'>Smart Phones</h1>
            <span className='subTitle'>Shop now</span>
        </div>
           
            </div>

            <div className = 'menuItem'>
        <div className = 'content'>
        <h1 className = 'title'>Ear phones</h1>
            <span className='subTitle'>Shop now</span>
        </div>
           
            </div>

            <div className = 'menuItem'>
        <div className = 'content'>
        <h1 className = 'title'>Acceseories</h1>
            <span className='subTitle'>Shop now</span>
        </div>
           
            </div>

            <div className = 'menuItem'>
        <div className = 'content'>
        <h1 className = 'title'>Miscellineaous</h1>
            <span className='subTitle'>Shop now</span>
        </div>
           
            </div>


        </div>
        </div>
    )
}