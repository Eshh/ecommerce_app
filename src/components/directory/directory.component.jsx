import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component.jsx";


class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : [{
                title : 'Laptops',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 1

            },{
                title : 'Smart Phones',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 2

            },{
                title : 'Audiophones',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 3

            },{
                title : 'Accessories',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 4,
                size : 'large'

            },{
                title : 'Miscellaneous',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 5,
                size : 'large'

            }]
        }
    }

    render(){
        return(


            <div className = 'directoryMenu'>
                {this.state.sections.map(({title,imageUrl,id , size}) => (
                    <MenuItem key={id} title = {title} imageUrl = {imageUrl} size = {size}/>
                ))
                }
                </div>

        )
    }
}

export default Directory;