/*Start dependencies*/
import React, { Component, PropTypes } from 'react';
import Picture from '../../components/picture.jsx';
import ShoppingCart from '../../components/shoppingcart.jsx';
import NavBar from '../../components/navbar.jsx';
import { browserHistory } from 'react-router';
import cart from '../../reducers/index.js';

/*Flag set to know if the client recieved and loaded
Will be set to True once the response from the server
Is loaded and parsed*/
var flag = true;


//Start React class
export default class Products extends Component {
	
	constructor(props) {
      super(props);
	  this.state = {clothingData: 0}
    }
    
	/*React method, executes before the component displays,
	  uses the Fetch API to get the results from the MYSQL-DB,
	  and assigns the results to the clothingData state object
	 
	componentWillMount() {
      fetch('/t')
      .then((result) => {
         return result.json();
       })
      .then((re) => {
		flag = true;
        this.setState({ clothingData: re });
      })
      .catch(function(error){
        console.log(error);
      });
    }
	React method, gets the shipping data for that particular day
	  by running the ship route
	componentDidMount(){
		fetch('/ship')
		.then((result) => {
         return result.json();
		})
		.then((res) => {
         console.log(res);
		})
		.catch(function(error){
         console.log(error);
      });
	}
	*/
	render(){
    /*if the flag variable is false, server is not done yet retriving 
	  data from the DB and parsing it, thus nothing displayed
	*/
    if (!flag){	
    return (
      <div>
      </div>
    );
	}
	//If flag is true (data is ready to be displayed)
	else{
		//console.log(this.state.clothingData[0].path);
		//console.log(this.state.clothingData[0].fileName);
		//console.log(this.state.clothingData);
		return (
			<div>
				
				<NavBar />
        <Picture className = "test" src = {this.state.clothingData} onClick = { () => {browserHistory.push('/Product'); }} name = {"joe"} />
		<ShoppingCart />
      </div>
    );
	}
 }
	
}