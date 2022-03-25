import React, {useState, useEffect} from 'react';
import BreweryList from './BreweryList';



function BreweryPage(){
    const [brewery, setBrewery] = useState ([])


    useEffect (()=>{
        fetch ('/breweries')
        .then ((r)=>r.json())
        .then(setBrewery)

    }, [])

    return (
        <div>
            <BreweryList brewery = {brewery}/>
        </div>
    )
}


export default BreweryPage;