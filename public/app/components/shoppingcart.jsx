//React Framework, and the Component class imported
import React, { Component } from 'react'

/*Redux methods*/
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AddAction} from '../actions/index.js';

//Defining of the ShoppingCart React class in JSX
class ShoppingCart extends Component {
	render(){
      const { onIncrement } = this.props
	  
	  //Local storage to remember the items in the shopping cart. Initialized from the global Redux store
	  localStorage['shoppingCartItems'] = this.props.value;
	  console.log(localStorage['shoppingCartItems']);
    return(
      <div>
	   <button className = {'btn btn-danger'} onClick = { () => this.props.AddAction('sub') }> Sub </button>
	   <button onClick = { () => this.props.AddAction('add') }> Add </button>
      </div>
    );
  }
} //End definition of the ShoppingCart class

//Redux method to allow the props to have access to the Redux global store
 function mapStateToProps(state){
	  return{
		  value: state.add
	  };  
  } 
 
 //Redux method to bind the actions created in the ShoppingCart class to a dispatch
 function mapDispatchToProps(dispatch){
	 return bindActionCreators({ AddAction: AddAction }, dispatch)
 }

 //Exports class to be used, wrapped in the Redux Higher Order Component (HOC) connect()
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);