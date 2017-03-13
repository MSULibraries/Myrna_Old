import React, { Component, PropTypes } from 'react';
export default class Text extends Component {
	render(){

    return(
      <div>
	   <p>{this.props.name}</p>
      </div>
    );
  }
}