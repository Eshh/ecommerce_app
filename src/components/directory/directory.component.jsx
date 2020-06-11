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
                id : 1,
                url : 'laptops'

            },{
                title : 'Smart Phones',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 2,
                url : 'laptops'

            },{
                title : 'Audiophones',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 3,
                url : 'laptops'

            },{
                title : 'Accessories',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 4,
                size : 'large',
                url : 'laptops'

            },{
                title : 'Miscellaneous',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                id : 5,
                size : 'large',
                url : 'blank'

            }]
        }
    }

    render(){
        return(


            <div className = 'directoryMenu'>
                {this.state.sections.map(({title,imageUrl,id , size , url}) => (
                    <MenuItem key={id} title = {title} imageUrl = {imageUrl} size = {size} linkUrl = {url}/>
                ))
                }
                </div>

        )
    }
}

export default Directory;