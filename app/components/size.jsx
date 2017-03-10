import React, { Component, PropTypes } from 'react';
var arr;

export default class SizeBox extends Component {
	
	render(){
	 	
	
    return ( 
	<div>
	  <select>
	  {this.props.values.map(function(val){
        return <option value="{val}">{val}</option>
	    })
	  }
      </select>       
	</div>
	);
  }
}