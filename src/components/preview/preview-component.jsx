import React from 'react';
import './preview-styles.scss';
import  CollectionItem  from '../collection-item/collection-item.jsx'
 const Preview = ({ id , title , items }) => {
    return (
        <div className = 'collection'>
            <h1 className = 'preview-title'>{title.toUpperCase()}</h1>
            <div className = 'preview'>
        {
            items.filter((item , index) => index < 4).map(({id , ...otherItemprops}) => (
                <CollectionItem key = {id} {...otherItemprops} />
            ))
        }
            </div>
        </div>
    )
}

export default Preview;