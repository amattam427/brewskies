import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";


function BeersPage(){
    const {id} = useParams();
    const [beers, setBeers] = useState ([])

    useEffect (()=>{
        fetch(`/breweries/${id}/beers`)
        .then((r)=>r.json())
        .then((data)=>{
            console.log(data)
            setBeers(data)
        })
    }, [id])

    return (
        <div className="brewery-beers">
           <h2>Name: {beers.name}</h2> 

        </div>
    )
}




export default BeersPage;