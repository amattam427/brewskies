import React, {useState} from 'react';
//import NewReviewForm from './NewReviewForm';
import BeersReviewEdit from './BeersReviewEdit';

function BeersReviewItem({onUpdateReview, onDeleteReview, reviewId, review, author, rating}){
    // const [updatedComment, setUpdatedComment] = useState('');
    // const [updatedName, setUpdatedName] = useState('');
    // const [updatedRating, setUpdatedRating] = useState(0);
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
                <button onClick={handleDelete}>Delete</button>
                <button onClick={()=>setEditComment((editComment)=> !editComment)}>Edit</button>
                </div>
            )
            }
           
     
        </div>
    )
}





        



export default BeersReviewItem; 