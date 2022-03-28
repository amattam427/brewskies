import React, {useState} from 'react';
import NewReviewForm from './NewReviewForm';

function BeersReviewItem({onUpdateReview, onDeleteReview, reviewId, review, author, rating, onAddReview, beersId}){
    const [updatedComment, setUpdatedComment] = useState('');
    const [updatedName, setUpdatedName] = useState('');
    const [updatedRating, setUpdatedRating] = useState(0)

    function handleDelete(){
       fetch(`/reviews/${reviewId}`, {
           method: "DELETE",
       });
       onDeleteReview(reviewId); 
    }

    function handleUpdate(e){
        e.preventDefault();
        fetch(`/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                review: updatedComment,
                rating: updatedRating,
                author: updatedName
            }),
        })
            .then((r)=>r.json())
            .then((updatedReview)=>onUpdateReview(updatedReview))
            setUpdatedComment(updatedComment);
            setUpdatedName(updatedName);
            setUpdatedRating(updatedRating);
    }

    return (
        <div>
           <h2>{review}</h2>
           <h3>Rating out of 5: {rating}</h3>
           <h4>-{author}</h4>
           <form onSubmit={handleUpdate}>
           <input className="update-comment" type="text" name="comment" placeholder="Edit Review!" value={updatedComment} onChange={(e)=>setUpdatedComment(e.target.value)}/>
           <input className="update-name" type="text" name="name" placeholder="Your Name" value={updatedName} onChange={(e)=>setUpdatedName(e.target.value)}/>
           <input className="updated-rating" type="number" name="rating" placeholder="" value={updatedRating} onChange={(e)=>setUpdatedRating(e.target.value)}/>
           <button type="submit">Update</button>
               
            </form>  
           <button onClick={handleDelete}>Delete</button>
           <div>
               <NewReviewForm onAddReview={onAddReview} beersId={beersId}/>
           </div>
        </div>
        
     
        
    )
}



export default BeersReviewItem; 