import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation';
import { Home, Login, Signup, Error404 } from './components/pages';

function App() {

  const routes = [
    "home",
    "login",
    "signup"
  ]
  
  const [user, setUser] = useState(null)
  const [route, updateRoute] = useState(routes[0])

  const router = () => {
    switch( route )
    {
      case "home":
        return <Home />
      break;
      case "login":
        return <Login updateUser={user => setUser(user)} />
      break;
      case "signup":
        return <Signup />
      break;
      default:
        return <Error404 />
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
        {user !== null ? (
        <Navbar routes={["pie", "rowwwww"]} current="pie" onClick={() => {}} />
        ) : null }
        <Navbar routes={routes} current={route} onClick={val => updateRoute(val)} />
       {router()}
      </header>
    </div>
  );
}

export default App;
