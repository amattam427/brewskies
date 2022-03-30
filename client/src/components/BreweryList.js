import React from 'react';
import BreweryItem from './BreweryItem';


function BreweryList({brewery}){

    return (
        <div className = "brewery">
    
            {brewery.map((brew)=>{
                return (
                    <BreweryItem
                        key = {brew.id}
                        id = {brew.id}
                        name = {brew.name}
                        street = {brew.street}
                        city = {brew.city}
                        state = {brew.state}
                        phone = {brew.phone_number}
                        image = {brew.image}
                        />
                )
            })}

        </div>
    )
}


export default BreweryList;