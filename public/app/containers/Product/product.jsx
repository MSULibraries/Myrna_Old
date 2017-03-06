/*Component used to render individual products within the app*/

/*Start importation of libraries and components*/
import React, { Component, PropTypes } from 'react';
import Picture from '../../components/picture.jsx';
import Size from '../../components/size.jsx';
import ShoppingCart from '../../components/shoppingcart.jsx';

export default class Products extends Component {
	render(){
		var MyArray = ['justin','tiffany','joe','john','karissa','pam','joseph','sean','kim'];
		var sizes = ['Small','Medium','Large','XL'];
		var Quant = ['1','2','3'];
		var SideArray = ['http://placehold.it/92x138', 'http://placehold.it/92x138', 'http://placehold.it/92x138', 'http://placehold.it/92x138' ];
		var imageSrc = ['http://placehold.it/580x870'];
  return (
    <div>
	 <div className = "col-md-3" style = {{maxWidth: '30%', background: 'red'}}>
	  <Picture sidebar = {true}  src = {SideArray} name = {MyArray} amount = {4} />
	 </div>
	 <div className = "col-md-6">
	   <Picture className = "col-md-6" src = {imageSrc} name = {MyArray} amount = {1} />
     </div>	   
	 <div className = "col-md-3" >
	  <Size values = {sizes}  />
	  <Size values = {Quant}  />
	 </div>
	 <ShoppingCart />
    </div>
  );
 }
}