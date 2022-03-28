import React from 'react';

import BeersReviewItem from './BeersReviewItem';


function BeersReviewList({reviews}){



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
                        />
                )
                
            })}
    
        </div>
    )
}



export default BeersReviewList; 