import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import BeersReviewList from './BeersReviewList';
//import NewReviewForm from './NewReviewForm';



function BeersReviewPage(){

    const {id} = useParams();
    const [reviews, setBeerReviews] = useState ([])

    useEffect (()=>{
        fetch(`/beers/${id}/reviews`)
        .then((r)=>r.json())
        .then((data)=>{
            //console.log(data)
            setBeerReviews(data)
        })
    }, [id])


    function handleAddReview(newReview){
        const updatedReviewArr = [...reviews, newReview];
        setBeerReviews(updatedReviewArr);
    }

    // function handleDeleteReview(id){
    //     const updatedReviewArr = beerReviews.filter((reviews)=> reviews.id !== id);
    //     setBeerReviews(updatedReviewArr)
    // }



    return (
        <div className="reviews-body">
             <h1>Reviews</h1>
            <BeersReviewList reviews={reviews} onAddReview={handleAddReview}/>
            {/* <NewReviewForm key={reviews.beer_id} onAddReview={handleAddReview} beersId={reviews.beer_id} /> */}
            
        </div>
    ) 
}



export default BeersReviewPage; 