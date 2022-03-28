import React from 'react';
import NewReviewForm from './NewReviewForm';

function BeersReviewItem({review, author, rating, onAddReview, beersId}){

    return (
        <div>
           <h2>{review}</h2>
           <h3>Rating out of 5: {rating}</h3>
           <h4>-{author}</h4>  
           <div>
               <NewReviewForm onAddReview={onAddReview} beersId={beersId}/>
           </div>
        </div>
        
     
        
    )
}



export default BeersReviewItem; 