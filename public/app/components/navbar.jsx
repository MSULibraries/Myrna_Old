import React, { Component, PropTypes } from 'react';
export default class NavBar extends Component {
	render(){
 
    return (
     
      <div className="navbar row">
        <div className="col-md-12">
        <ul>
         <li className="dropdown col-md-offset-3" id="nav-item">
            <a href="#" className="dropdown-btn">Clothes</a>
            <div className="dropdown-items">
              <h2 className="col-md-12">View All</h2>
              <ul className="column1 col-md-2">  
                <li><a href="#">Aprons</a></li>
                <li><a href="#">Capes</a></li>
                <li><a href="#">Dancewear</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Jackets</a></li>
                <li><a href="#">Jumpsuits</a></li>
                <li><a href="#">Nightwear</a></li>
                <li><a href="#">Pants</a></li>
              </ul>
              <ul className="column2 col-md-offset-1 col-md-2">
                <li><a href="#">Robes</a></li>
                <li><a href="#">Shawls</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Skirts</a></li>
                <li><a href="#">Suits</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">Vests</a></li>
              </ul> 
            </div> 
        </li>
        <li id="nav-item"><a href="#">About</a></li>
        <li id="nav-item"><a href="#">Policies</a></li>
        <li id="nav-item"><a href="#">How To Rent</a></li>
        <li id="nav-item"><a href="#">Contact</a></li>   
        </ul> 
        </div>  
      </div>
    );
  }
}