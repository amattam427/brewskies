import React from 'react';

import BeersReviewItem from './BeersReviewItem';
// import NewReviewForm from './NewReviewForm';


function BeersReviewList({reviews, onAddReview}){



    return (
        <div className="brewery-reviews">
            {reviews.map((r)=>{
                return (
                    <BeersReviewItem
                        key={r.id}
                        id={r.id}
                        review={r.comment}
                        author={r.name}
                        rating={r.rating}
                        beersId={r.beer_id}
                        onAddReview={onAddReview}
                        // onDeleteReview={onDeleteReview}
                        />
                )
                
            })}
            {/* <NewReviewForm onAddReview={onAddReview} beersId={reviews.beer_id}/> */}
    
        </div>
    )
}



export default BeersReviewList; 