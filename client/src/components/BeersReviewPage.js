import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import BeersReviewList from './BeersReviewList';
//import NewReviewForm from './NewReviewForm';



function BeersReviewPage(){

    const {id} = useParams();
    const [reviews, setBeerReviews] = useState ([])
    // const [reviews, setBeerReviews] = useState ([{
    // "id": 1,
    // "comment": "",
    // "name": "",
    // "rating": 5,
    // "beer_id": 1
    // }])

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

    function handleDeleteReview(id){
        const updatedReviewArr = reviews.filter((reviews)=> reviews.id !== id);
        setBeerReviews(updatedReviewArr)
    }

    function handleUpdateReview(updatedReview){
        const updatedReviewArr = reviews.map((review)=>{
            if (review.id === updatedReview.id){
                return updatedReview
            } else {
                return review;
            }
        })
        setBeerReviews(updatedReviewArr)
    }









    return (
        <div className="reviews-body">
             <h1>Reviews</h1>
        
            <BeersReviewList reviews={reviews} onAddReview={handleAddReview} onDeleteReview={handleDeleteReview} onUpdateReview={handleUpdateReview}/>
            {/* <NewReviewForm key={reviews.beer_id} onAddReview={handleAddReview} beersId={reviews.beer_id} /> */}
            
        </div>
    ) 
}



export default BeersReviewPage; 