import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({beerRecipe}) {

    return (
        <div>
            {beerRecipe.map((recipe)=>{
                return (
                    <RecipeItem 
                        key = {recipe.id}
                        id = {recipe.id}
                        name = {recipe.name}
                        description = {recipe.description}
                        image = {recipe.image_url}
                        ingredients = {recipe.ingredients}
                        />
                )
            })}
        </div>
    )
}


export default RecipeList;