import React, {useState} from 'react';
import BeersReviewEdit from './BeersReviewEdit';


function BeersReviewItem({onUpdateReview, onDeleteReview, reviewId, review, author, rating}){
   
    const [editComment, setEditComment] = useState(false)

    function handleDelete(){
       fetch(`/reviews/${reviewId}`, {
           method: "DELETE",
       });
       onDeleteReview(reviewId); 
    }


    return (
        <div>
            {editComment ? (
                <BeersReviewEdit
                    reviewId={reviewId}
                    review={review}
                    author={author}
                    rating={rating}
                    setEditComment={setEditComment}
                    onUpdateReview={onUpdateReview}
                    />
            ) : (
                <div>

                <h2>{review}</h2>
                <h3>Rating out of 5: {rating}</h3>
                <h4>-{author}</h4>
                <div className="review-btn">
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
                <button className="edit-btn" onClick={()=>setEditComment((editComment)=> !editComment)}>Edit</button>
                </div>
    
                </div>
            )
            }
           
     
        </div>
    )
}





        



export default BeersReviewItem; 