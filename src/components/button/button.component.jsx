import React from 'react';
import './button.styles.scss';

const ButtonComponent = ( {children , ...otherProps}) => {
    return (
        <button className = 'custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default ButtonComponent;