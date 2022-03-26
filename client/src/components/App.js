import React from 'react';
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import RecipePage from './RecipePage';
import BreweryPage from './BreweryPage';
import BeersPage from './BeersPage';
// import Ingredients from './Ingredients';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>

      <Routes>

        <Route path = 'recipes' element={<RecipePage/>}/>
        {/* <Route path = ':id' element={<Ingredients/>}/> */}
        <Route path = 'brewery/:id' element={<BeersPage/>}/>

        <Route path = '/' element={<BreweryPage/>}/>

      </Routes>
     
  
    </div>
  );
}

export default App;
