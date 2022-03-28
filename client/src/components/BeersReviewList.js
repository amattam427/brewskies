import React from 'react';

import BeersReviewItem from './BeersReviewItem';
//import NewReviewForm from './NewReviewForm';


function BeersReviewList({reviews, onAddReview, onDeleteReview, onUpdateReview}){


    // const reviewList = reviews.map((r)=>
    //     <BeersReviewItem
    //         key={r.id}
    //         reviewId={r.id}
    //         review={r.comment}
    //         author={r.name}
    //         rating={r.rating}
    //         onDeleteReview={onDeleteReview}
    //         onUpdateReview={onUpdateReview}
    //         />
    // )





    return (
        <div className="brewery-reviews">

            {/* <>
                {reviewList}
            </> */}
         
            {reviews.map((r)=>{
                return (
                    <BeersReviewItem
                        key={r.id}
                        reviewId={r.id}
                        review={r.comment}
                        author={r.name}
                        rating={r.rating}
                        beersId={r.beer_id}
                        onAddReview={onAddReview}
                        onDeleteReview={onDeleteReview}
                        onUpdateReview={onUpdateReview}
                        />
                )
                
            })}
            {/* <NewReviewForm key={reviews.beer_id} onAddReview={onAddReview} beersId={reviews.beer_id}/> */}
    
        </div>
    )
}



export default BeersReviewList; 