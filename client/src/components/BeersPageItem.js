import React from 'react';
import {Link} from "react-router-dom"
//import BeersReviewPage from './BeersReviewPage';


function BeersPageItem({id, name, image, flavor, style, onDeleteBeer}){

    function handleDeleteBeer(){
        fetch(`/beers/${id}`, {
            method: "DELETE",
        });
        onDeleteBeer(id); 
     }


    return (
        <div>
            <h2>{name}</h2>
            <h3>Flavor: {flavor}</h3>
            <h3>Style: {style}</h3>
            <img src = {image} alt = {name}/> <br/>
            <button onClick={handleDeleteBeer}>Delete</button>
            <Link to = {`beer/${id}`}>
            <button>Reviews</button>
            </Link>
        </div>
    )
}



export default BeersPageItem; 