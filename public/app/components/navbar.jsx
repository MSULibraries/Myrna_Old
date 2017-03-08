import React, { Component, PropTypes } from 'react';
export default class NavBar extends Component {
	render(){

    return(
      <div>

        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">    
            <div className="navbar-header">
         {/*<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>*/}
         <a className="navbar-brand" href="#">Title</a>
            </div>{/*navbar-header*/}        
    <div className="collapse navbar-collapse">
     <ul className="nav navbar-nav">
      <li><a href="#">Home</a></li>

      {/*Drop down Section*/}         
      <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown" roll="button" aria-expanded="false">Clothing</a>
      <ul className="dropdown-menu">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
      </li> 
      {/*Drop down Section End*/}           
              
      <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              
      <li className="nav-item"><a className="nav-link" href="#">Policies</a></li>

      <li className="nav-item"><a className="nav-link" href="#">How To Rent</a></li>

      <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>        
    </ul>
       </div>{/*nav-bar collapse*/}     
       </div>{/*container-fluid*/}        
 
      </nav>
           
      </div>
    );
  }
}