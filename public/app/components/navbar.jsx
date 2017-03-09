import React, { Component, PropTypes } from 'react';
export default class NavBar extends Component {
	render(){
 
    return(
        <ul  className="navbar">
         <li className="dropdown">
            <a href="#" className="dropdown-btn">Clothes</a>
            <div className="dropdown-items">  
              <a href="#">Item</a>
              <a href="#">Item</a>
              <a href="#">Item</a>
              <a href="#">Item</a>
            </div>  
        </li>
        <li>About</li>
        <li>Policies</li>
        <li>How To Rent</li>
        <li>Contact</li>   
       </ul>     
    );
  }
}