import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import BeersReviewList from './BeersReviewList';


function BeersReviewPage(){
    const {id} = useParams();
    const [reviews, setReviews] = useState ([])

    useEffect (()=> {
        fetch(`/beers/${id}/reviews`)
        .then((r)=>r.json())
        .then((data)=>{
            console.log(data)
            setReviews(data)
        })
    }, [id])

    return (
        <div>
            <BeersReviewList reviews={reviews}/>

        </div>
    )
}



export default BeersReviewPage; 