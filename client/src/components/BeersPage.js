import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
//import BeersPageItem from './BeersPageItem';
import BeersPageList from './BeersPageList';



function BeersPage({user}){
    const id = parseInt (useParams().id);
    //console.log(typeof id)
    const [beers, setBeers] = useState ([])

    const [formData, setFormData] = useState({
        name: "",
        image: "", 
        flavor: "",
        beerstyle: "",
    });



    useEffect (()=>{
        fetch(`/breweries/${id}/beers`)
        .then((r)=>r.json())
        .then((data)=>{
            //console.log(data)
            setBeers(data)
        })
    }, [id])




    const onAddBeer = function handleAddBeer(newBeer){
        const updatedBeerArr = [...beers, newBeer];
        setBeers(updatedBeerArr);
    }

    function handleDeleteBeer(id){
        const updatedBeerArr = beers.filter((beer)=> beer.id !== id);
        setBeers(updatedBeerArr)
    }

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }

    

    

    function handleBeerSubmit(e){
        e.preventDefault();
        console.log(id)
        const newBeers = {
          name: formData.name,
          image: formData.image,
          flavor: formData.flavor,
          beer_style: formData.beerstyle,
          brewery_id: id
        }
        console.log(newBeers)
        fetch('/beers', {
            method: "POST",
            headers: {
                // "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(
                newBeers
            ),
        })
            .then((r)=>r.json())
            .then((newBeer)=>onAddBeer(newBeer))
  
    }
    let newBeerForm 
        if (user){
            newBeerForm = <> 
            <h3>Add a New Beer</h3>
              <form onSubmit={handleBeerSubmit}>
                <input className="beer-name" type="text" name="name" placeholder="Name of Beer" value={formData.name} onChange={handleChange}/>
                <input className="beer-image" type="text" name="image" placeholder="Image of Beer" value={formData.image} onChange={handleChange}/>
                <input className="beer-flavor" type="text" name="flavor" placeholder="Flavor - i.e 'Fruity'" value={formData.flavor} onChange={handleChange}/>
                <input className="beer-style" type="text" name="beerstyle" placeholder="Type/Style of beer - i.e 'Lager, Porter'" value={formData.beerstyle} onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>
            </>
        } 
        if (!user){
            newBeerForm = <></>
        }





    return (
        <div className="brewery-beers">
              
    {newBeerForm}
           

        <BeersPageList beers = {beers} user = {user} onDeleteBeer={handleDeleteBeer}/>
           

        </div>
    )
}




export default BeersPage;