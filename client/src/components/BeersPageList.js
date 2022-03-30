import React from 'react';
import BeersPageItem from './BeersPageItem';


function BeersPageList({beers, onDeleteBeer}){

    return (
        <div>
            {beers.map((beer)=>{
                return (
                    <BeersPageItem
                        key = {beer.id}
                        id = {beer.id}
                        name = {beer.name}
                        image = {beer.image}
                        flavor = {beer.flavor}
                        style = {beer.beer_style}
                        onDeleteBeer={onDeleteBeer}

                        />
                )
            })}

        </div>
    )
}



export default BeersPageList; 