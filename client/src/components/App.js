import React from 'react';
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import RecipePage from './RecipePage';
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

      </Routes>
  
    </div>
  );
}

export default App;
