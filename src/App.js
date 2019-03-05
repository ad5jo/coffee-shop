import React from 'react';
// , { Component }
import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="App">
      <Navbar />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  )
}

function Navbar(){
  return (
    <div clasName="App--navbar">
      <h1>Coffee Shop</h1>
    </div>
  )
}


function Main (){
  return(
    <div clasName="App--main">
      <h2>Main</h2>
    </div>
  )
}
function Sidebar (){
  return(
    <div clasName="App--sidebar">
      <h2>Sidebar</h2>
    </div>
  )
}
function Footer (){
  return(
    <div clasName="App--footer">
      <h5>&copy;2019 Coffee Shop Inc. </h5>
    </div>
  )
}

export default App;
