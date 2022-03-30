import React from 'react';
import Ingredients from './Ingredients';


function IngredientsList({beerRecipe}){


    // if (beerRecipe.ingredients){
    //     ingredients = beerRecipe.ingredients.map((i)=>
    //         <Ingredients
    //         key = {i.id}
    //         id={i.id}
    //         malt_name={i.malt.name}
    //         />

            
    //     )
    // }
     if (beerRecipe){
         console.log(beerRecipe.ingredients.malt.name)
     }
    



    return(
        <div className="ingredients-body">
            {beerRecipe.ingredients.map((i)=>{
                return (
                    <Ingredients
                        key = {i.id}
                        id={i.id}
                        malt_name={i.malt.name}
                        />
                )
            })}

        
           

        </div>
    )
}


export default IngredientsList;