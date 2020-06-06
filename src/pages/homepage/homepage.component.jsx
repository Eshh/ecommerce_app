import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component.jsx';

export  const HomePage = () => {
    return (
        <div className = 'homepage'>
            <Directory />
        </div>
    )
}