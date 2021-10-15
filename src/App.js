import React, { useState } from 'react'
import { Route, Switch } from "react-router";
import { Link } from 'react-router-dom'

import './App.css';
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Favourites from './components/Favourites';

function App() {

  const [favourites, setFavourites] = useState([]);
  const addFavourite = (favourite) => {
    console.log('Adding favourite...');
    console.log(favourite);
    setFavourites((favourites) => [
      ...favourites,
      favourite
    ]);
  }

  return (
    <div className="App">

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>

      <Switch>
        <Route exact path='/'
          render={(props) => (
            <Home {...props} addFavourite={addFavourite} favourites={favourites} />
          )}
        />
        <Route exact path='/favourites'
          render={(props) => (
            <Favourites {...props} favourites={favourites} />
          )}
        />
        <Route path="/detail/:param" component={Detail} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
