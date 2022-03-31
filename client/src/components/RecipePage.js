import React, {useState, useEffect} from 'react';
import RecipeList from './RecipeList';


function RecipePage() {
    const [beerRecipe, setBeerRecipe] = useState ([])

    useEffect (()=>{
        fetch ('https://api.punkapi.com/v2/beers')
        .then ((r)=>r.json())
        .then(setBeerRecipe)
    }, [])


    return (
        <div>
           <RecipeList beerRecipe={beerRecipe}/>
        </div>
    )
}



export default RecipePage; 