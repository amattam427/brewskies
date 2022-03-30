// import React, {useState} from 'react';



// function NewBeerForm({onAddBeer, breweryId}){
//     const [name, setName] = useState("")
//     const [image, setImage] = useState("")
//     const [flavor, setFlavor] = useState("")
//     const [style, setStyle] = useState("")
    


//     function handleBeerSubmit(e){
//         e.preventDefault();
//         fetch('http://localhost:3000/beers', {
//             method: "POST",
//             header: {
//                 "Accept":"application/json",
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify({
//                 name: name,
//                 image: image,
//                 flavor: flavor,
//                 beer_style: style,
//                 brewery_id: id
//             }),
//         })
//             .then((r)=>r.json())
//             .then((newBeer)=>onAddBeer(newBeer))
//             setName('');
//             setImage('');
//             setFlavor('');
//             setStyle('')
//     }



//     return (
//         <div className="beer-form">
//             <h3>Add a New Beer</h3>
//             <form onSubmit={handleBeerSubmit}>
//                 <input className="beer-name" type="text" name="name" placeholder="Name of Beer" value={name} onChange={(e)=>setName(e.target.value)}/>
//                 <input className="beer-image" type="text" name="image" placeholder="Image of Beer" value={image} onChange={(e)=>setImage(e.target.value)}/>
//                 <input className="beer-flavor" type="text" name="flavor" placeholder="Flavor - i.e 'Fruity'" value={flavor} onChange={(e)=>setFlavor(e.target.value)}/>
//                 <input className="beer-style" type="text" name="style" placeholder="Type/Style of beer - i.e 'Lager, Porter'" value={style} onChange={(e)=>setStyle(e.target.value)}/>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )





// }




// export default NewBeerForm;