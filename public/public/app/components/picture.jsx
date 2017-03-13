/*Component used to display the pictures within the app*/

/*Start import of libraries*/
import React, { Component, PropTypes } from 'react';

//Array used to hold all the products before being displayed onto the page
var indents = [];

//Used to hold the randomly chosen products from the indents array
var randomArray = [];

//Start definition of React class
export default class Picture extends Component {
	
	//React method which executes before the component mounts
	componentWillMount(){
	  
	  //If the sidebar is requested on the image, this will execute
	  if(this.props.sidebar){
      for (var i = 0; i < this.props.amount; i++) {
        indents.push(<div><div id = {i}><img className = "test" src={this.props.src[i]} /></div><br/></div>);
       }
	  }
	  else{
		  let path;
		  Object.keys(this.props.src).map((value) => {
		  path =  this.props.src[value].path + '/thumbnails/' + this.props.src[value].fileName;
		  indents.push(<div id = {i} className = "col-md-3"><img style = {{margin: '1%'}}  src={path} /><p>{this.props.src[value].id}</p></div>);
        });
	  }
	  
	  //Annoymous function used to get the random index of the indents array, to then fill the randomArray
	  var randArr = function getRandomIntInclusive(min = 0, max = indents.length) {
                                 min = Math.ceil(min);
							     max = Math.floor(max);
							     return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		for(let i = 0; i < 8; i++){
			let k = randArr();
			randomArray[i] = indents[k];
		}
	}
    //Renders component
	render(){
     return ( 
	 <div onClick={this.props.onClick}>
	 {randomArray} 
	 </div>
	);
  }
}