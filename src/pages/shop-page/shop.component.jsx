import React from 'react';
import shopDataCollection from './shop.data'
import Preview from '../../components/preview/preview-component.jsx';

class ShopPage extends React.Component {
    constructor(){
        super()
        this.state = {
            shopData : shopDataCollection
        }
    }
    render(){
        const { shopData } = this.state;
        return(
            <div>{
                shopData.map(({id, ...otherProps}) => (
                    <Preview key = {id} {...otherProps} />
                ) )
                }</div>
        )
    }

}

export default ShopPage;