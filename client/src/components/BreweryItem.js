import React from 'react';
import {Link} from "react-router-dom"





function BreweryItem({id, name, street, city, state, phone, image}){

    const imageSize={
        width:'400px',
        height: '300px' 
     }

   

    return (
        <div className = "brewery-list">
            <h2>{name}</h2>
            <h3>Address: {street}</h3>
            <h3>{city}, {state}</h3>
            <h4>Contact: {phone}</h4>
            <Link to = {`brewery/${id}`}>
            <img style={imageSize} src={image} alt={name}/>
            </Link>

        </div>
    )
}


export default BreweryItem;