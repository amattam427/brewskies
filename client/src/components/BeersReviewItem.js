import React from 'react';


function BeersReviewItem({comment, name, rating}){

    return (
        <div>
            <h3>{comment}</h3>
            <h4>Rating:{rating}</h4>
            <h5>-{name}</h5>

        </div>
    )
}



export default BeersReviewItem; 