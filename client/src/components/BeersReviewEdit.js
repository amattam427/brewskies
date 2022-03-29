import React, {useState} from 'react';



function BeersReviewEdit({reviewId, review, author, rating,  setEditComment, onUpdateReview}){
    const [updatedComment, setUpdatedComment] = useState('');
    const [updatedName, setUpdatedName] = useState('');
    const [updatedRating, setUpdatedRating] = useState(0);


    function handleUpdate(e){
        e.preventDefault();
        fetch(`http://localhost:3000/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: updatedComment,
                rating: updatedRating,
                name: updatedName
            }),
        })
            .then((r)=>r.json())
            .then((updatedReview)=>onUpdateReview(updatedReview))
            .then(()=>setEditComment(false))
            setUpdatedComment(updatedComment);
            setUpdatedName(updatedName);
            setUpdatedRating(updatedRating);
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input className="update-comment" type="text" name="comment" placeholder={review} value={updatedComment} onChange={(e)=>setUpdatedComment(e.target.value)}/>
                <input className="update-name" type="text" name="name" placeholder={author} value={updatedName} onChange={(e)=>setUpdatedName(e.target.value)}/>
                <input className="updated-rating" type="number" name="rating" placeholder={rating} value={updatedRating} onChange={(e)=>setUpdatedRating(e.target.value)}/>
                <button type="submit">Update</button>
               
            </form> 
        </div>
    )
}




export default BeersReviewEdit;