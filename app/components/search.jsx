import React, { Component, PropTypes } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import mail from './mail';
const KEYS_TO_FILTERS = ['id'];
var filteredEmails;
var flag = true;

export default class Search extends Component {
    constructor(props) {
    super(props);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.state = {searchTerm: ''};
  }

  searchUpdated (term) {
    console.log('update');
    this.setState({searchTerm: term})
  }
  
	render(){
    filteredEmails = mail.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
   if (!flag){	
    return (
      <div>
      </div>
    );
	}
  else{
    return(
     <div>
        <SearchInput className='search-input' onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className='mail' key={email.id}>
            </div>
          )
        })}
      </div>
    );
   }
  }
}