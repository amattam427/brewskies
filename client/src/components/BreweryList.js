import React from 'react';
import BreweryItem from './BreweryItem';


function BreweryList({brewery}){

    return (
        <div>
            <h1>Find a Brewery</h1>
            <div className = "table-header">
            <table>
                <thead>
                        <tr>
                            <th>Brewery</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                </table>

            </div>
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
                        />
                )
            })}

        </div>
    )
}


export default BreweryList;