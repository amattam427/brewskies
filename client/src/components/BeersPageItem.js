import React from 'react';


function BeersPageItem({name, image, flavor, style}){

    return (
        <div>
            <h2>{name}</h2>
            <h3>Flavor: {flavor}</h3>
            <h3>Style: {style}</h3>
            <img src = {image} alt = {name}/>
        </div>
    )
}



export default BeersPageItem; 