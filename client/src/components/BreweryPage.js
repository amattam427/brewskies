import React, {useState, useEffect} from 'react';
import BreweryList from './BreweryList';
import SearchList from './SearchList';



function BreweryPage(){
    const [brewery, setBrewery] = useState ([])
    const [searchTerm, setSearchTerm] = useState('')


    useEffect (()=>{
        fetch ('/breweries')
        .then ((r)=>r.json())
        .then(setBrewery)

    }, [])

    const filteredList = brewery.filter((brew)=>{
        return brew.state.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <div>
            <SearchList setSearchTerm = {setSearchTerm}/>
            <BreweryList brewery = {filteredList}/>
        </div>
    )
}


export default BreweryPage;