import React from 'react';
import BeersReviewItem from './BeersReviewItem';


function BeersReviewList({reviews}){

    return (
        <div>
            {reviews.map((review)=>{
                return (
                    <BeersReviewItem
                        key = {review.id}
                        id = {review.id}
                        comment = {review.comment}
                        name = {review.name}
                        rating = {review.rating}
                        />
                )
            })}

        </div>
    )
}



export default BeersReviewList; 