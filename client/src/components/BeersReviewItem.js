import React from 'react';
import NewReviewForm from './NewReviewForm';

function BeersReviewItem({onDeleteReview, reviewId, review, author, rating, onAddReview, beersId}){

    function handleDelete(){
       fetch(`/reviews/${reviewId}`, {
           method: "DELETE",
       });
       onDeleteReview(reviewId); 
    }

    return (
        <div>
           <h2>{review}</h2>
           <h3>Rating out of 5: {rating}</h3>
           <h4>-{author}</h4>  
           <button onClick={handleDelete}>Delete</button>
           <div>
               <NewReviewForm onAddReview={onAddReview} beersId={beersId}/>
           </div>
        </div>
        
     
        
    )
}



export default BeersReviewItem; 