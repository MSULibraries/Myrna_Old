import React, { Component, PropTypes } from 'react';
export default class NavBar extends Component {
	render(){
 
    return (
     <div className="container-fluid">
      <div className="navbar row">
          <div className="col-xs-12 col-sm-5 col-md-9 col-sm-offset-2 col-md-offset-2 col-lg-offset-3 ">
        <ul>
         <li className="dropdown">
            <a id="nav-item" href="#" className="dropdown-btn">Clothes</a>
            <div className="dropdown-items">
              <div className="row">    
              <h2 className="col-sm-12 col-xs-offset-3 col-sm-offset-1 col-md-12 col-md-offset-1" id="view-all"><a href="#">View All</a></h2>
              <ul className="col-xs-12 col-md-1 col-md-offset-1">  
                <li><a href="#">Aprons</a></li>
                <li><a href="#">Capes</a></li>
                <li><a href="#">Dancewear</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Jackets</a></li>
                <li><a href="#">Jumpsuits</a></li>
                <li><a href="#">Nightwear</a></li>
                <li><a href="#">Pants</a></li>
              </ul>
              <ul className="col-md-offset-1 col-md-1">
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
            </div>  
        </li>
        <li><a id="nav-item" href="#">About</a></li>
        <li><a id="nav-item" href="#">Policies</a></li>
        <li><a id="nav-item" href="#">How To Rent</a></li>
        <li><a id="nav-item" href="#">Contact</a></li>   
        </ul> 
        </div>  
      </div>
      </div>
    );
  }
}