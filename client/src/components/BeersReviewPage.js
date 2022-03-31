import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import BeersReviewItem from './BeersReviewItem';




function BeersReviewPage(){

    const {id} = useParams();
    const [reviews, setBeerReviews] = useState ([])

    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");



    useEffect (()=>{
        fetch(`/beers/${id}/reviews`)
        .then((r)=>r.json())
        .then((data)=>{
            //console.log(data)
            setBeerReviews(data)
        })
    }, [id])


    const onAddReview = function handleAddReview(newReview){
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

    function handleReviewSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/reviews', {
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: comment,
                rating: rating,
                name: name,
                beer_id: id
            }),
        })
                .then((r)=>r.json())
                .then((newReview)=>onAddReview(newReview))
                setComment('');
                setName('');
                setRating(0);
    }

    const reviewList = reviews.map((r)=>
        <BeersReviewItem
            key={r.id}
            reviewId={r.id}
            review={r.comment}
            author={r.name}
            rating={r.rating}
            onDeleteReview={handleDeleteReview}
            onUpdateReview={handleUpdateReview}
            />

    )









    return (
        <div className="reviews-body">
             <h1>Reviews</h1>
             <div >{reviewList}</div>
             <div className="review-container">
             <h2>Write a Review</h2>
            <form onSubmit={handleReviewSubmit}>
                <input className="review-comment" type="text" name="comment" placeholder="Write a Review!" value={comment} onChange={(e)=>setComment(e.target.value)}/> <br/>
                <input className="review-name" type="text" name="name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
                <p className="rating-p">Rating out of 5:</p>
                <input className="review-rating" type="number" name="rating" placeholder="" value={rating} onChange={(e)=>setRating(e.target.value)}/>
               <button type="submit">Submit</button>
             </form>
             </div>
            
        </div>
    ) 
}



export default BeersReviewPage; 