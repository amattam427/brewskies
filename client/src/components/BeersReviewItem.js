import React from 'react';


function BeersReviewItem({review, author, rating}){

    return (
        <div>
           <h2>{review}</h2>
           <h3>Rating out of 5: {rating}</h3>
           <h4>-{author}</h4>

        </div>
    )
}



export default BeersReviewItem; 