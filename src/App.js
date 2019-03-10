import React, { Component } from 'react';
// , { Component }
//import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  render(){
    const sidebarTitle = 'Daily Menu'
    const rightnow = new Date().toString().split(" ").slice(0,4).join(" ")

    const menu = {
      coffee: [
        {name: 'expresso', price: 3.99},
        {name: 'Cafe Latte', price: 4.99},
        {name: 'Drip Coffee', price: 2.99},
        {name: 'Iced Coffee', price: 3.99},
        {name: 'Cold Brew', price: 2.99},
        {name: 'Americano', price: 1.99},
        {name: 'Cappucino', price: 3.99},
        {name: 'Mocha', price: 3.50},
      ],
      bakery: [
        {name: 'Blue berry muffin', price: 2.00},
        {name: 'Banana Breat', price: 2.00},
        {name: 'Lemon Pound Cake', price: 2.00},
      ],
      specials: [
        {name: 'pie', price: 2.00},
        {name: 'Charro Beans', price: 4.00},
        {name: 'Tacos', price: 6.00},
      ],

    }
    return(
      <div className="App">
        <Navbar />
        <Sidebar 
          title={sidebarTitle} 
          now={rightnow} 
          menu = {menu}
        />
        <Main />
        <Footer />
      </div>
    )
  }
}




function Navbar(props){
  return (
    <div className="App--navbar">
      <h1>Coffee Shop</h1>
    </div>
  )
}


function Main (props){
  return(
    <div className="App--main">
      <h2>Main</h2>
    </div>
  )
}
function Sidebar (props){

  return(
    <div className="App--sidebar">
      <h2>{props.title}</h2>
      <p>Last Updated: {props.now}</p>
      <hr />
      <p>Coffee</p>
      <ul>
        {
          props.menu.coffee.map( (item, idx) => {
            return (
              <li className = "menu-item" key = {idx}>
                {item.name} <span>${item.price.toFixed(2)}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
function Footer (props){
  return(
    <div className="App--footer">
      <h5>&copy;2019 Coffee Shop Inc. </h5>
    </div>
  )
}
// props is data in your compponent that doesn't change
//
export default App;
