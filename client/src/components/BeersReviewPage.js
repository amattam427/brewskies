import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import BeersReviewList from './BeersReviewList';



function BeersReviewPage(){

    const {id} = useParams();
    const [beerReviews, setBeerReviews] = useState ([])

    useEffect (()=>{
        fetch(`/beers/${id}/reviews`)
        .then((r)=>r.json())
        .then((data)=>{
            //console.log(data)
            setBeerReviews(data)
        })
    }, [id])
    return (
        <div className="reviews-body">
             <h1>Reviews</h1>
            <BeersReviewList reviews={beerReviews}/>
            
        </div>
    ) 
}



export default BeersReviewPage; 