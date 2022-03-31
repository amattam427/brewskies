import React from 'react';
import {Link} from "react-router-dom"

//import BeersReviewPage from './BeersReviewPage';


function BeersPageItem({user, id, name, image, flavor, style, onDeleteBeer}){

    function handleDeleteBeer(){
        fetch(`/beers/${id}`, {
            method: "DELETE",
        });
        onDeleteBeer(id); 
     }

     const imageSize={
        width:'400px',
        height: '300px' 
     }

     let deleteBeer 
        if (user){
            deleteBeer = <> 
            <button onClick={handleDeleteBeer}>Delete</button>
            </>
        }
        if (!user){
            deleteBeer = <> </>
        }
     


    return (
        <div className="beer-item">
            <h2>{name}</h2>
            <h3>Flavor: {flavor}</h3>
            <h3>Style: {style}</h3>
            <div className="beer-image">
            <img style={imageSize}  src = {image} alt = {name}/> <br/>
            {deleteBeer}
            <Link to = {`beer/${id}`}>
            <button>Reviews</button>
            </Link>
            </div>
        </div>
    )
}



export default BeersPageItem; 