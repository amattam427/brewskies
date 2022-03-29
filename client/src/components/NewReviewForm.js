//import React, {useState} from 'react';
//import React from 'react';
//import {useParams} from "react-router-dom";


// function NewReviewForm({onAddReview, beersId}){
//     // const {id} = useParams();
//     // const [reviews, setReviews] = useState([]);
//     const [comment, setComment] = useState("");
//     const [rating, setRating] = useState(0);
//     const [name, setName] = useState("");




    // function handleReviewSubmit(e){
    //     e.preventDefault();
    //     fetch('/reviews', {
    //         method: "POST",
    //         headers:{
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             comment: comment,
    //             rating: rating,
    //             name: name,
    //             beer_id: beersId
    //         }),
    //     })
    //             .then((r)=>r.json())
    //             .then((newReview)=>onAddReview(newReview))
    //             setComment('');
    //             setName('');
    //             setRating(0);
    // }


//     return (
//         <div>
//             <h2>Write a Review</h2>
//             <form onSubmit={handleReviewSubmit}>
//                 <input className="review-comment" type="text" name="comment" placeholder="Write a Review!" value={comment} onChange={(e)=>setComment(e.target.value)}/>
//                 <input className="review-name" type="text" name="name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
//                 <input className="review-rating" type="number" name="rating" placeholder="" value={rating} onChange={(e)=>setRating(e.target.value)}/>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }



// export default NewReviewForm;