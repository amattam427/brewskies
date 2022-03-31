import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import RecipePage from './RecipePage';
import BreweryPage from './BreweryPage';
import BeersPage from './BeersPage';
import BeersReviewPage from './BeersReviewPage';
import Login from './Login';

// import Ingredients from './Ingredients';

import {Route, Routes} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch('/me').then((r)=>{
      if (r.ok){
        r.json().then((user)=>setUser(user))
      }
    })
  }, [])


  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }




  return (
    <div className="App">
      <NavBar/>
      <Header user={user} onLogout={handleLogout}/>

      <Routes>
        <Route path ='login' element={<Login onLogin={handleLogin} />}/>

        <Route path = 'recipes' element={<RecipePage/>}/>
        {/* <Route path = ':id' element={<Ingredients/>}/> */}
        <Route path = 'brewery/:id' element={<BeersPage user={user}/>}/>

        <Route path = 'brewery/:id/beer/:id' element={<BeersReviewPage/>}/>

        <Route path = '/' element={<BreweryPage/>}/>

      </Routes>
     
  
    </div>
  );
}

export default App;
