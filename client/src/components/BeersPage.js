import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import BeersPageList from './BeersPageList';


function BeersPage(){
    const {id} = useParams();
    const [beers, setBeers] = useState ([])

    useEffect (()=>{
        fetch(`/breweries/${id}/beers`)
        .then((r)=>r.json())
        .then((data)=>{
            //console.log(data)
            setBeers(data)
        })
    }, [id])

    return (
        <div className="brewery-beers">
            <BeersPageList beers = {beers}/>

        </div>
    )
}




export default BeersPage;