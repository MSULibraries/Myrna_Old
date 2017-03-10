/*Handles all the routes of the application through the React-Router library*/

/*Start importation of libraries*/
import App from './containers/App/app.jsx';
import Home from './containers/Home/home.jsx';      
import Login from './containers/Login/login.jsx';  
import NotFound from './containers/NotFound/notfound.jsx'; 
import Products from './containers/Products/products.jsx';  
import Product from './containers/Product/product.jsx';    
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
const store = createStore(reducer);


class Routes extends React.Component {
  render() {
    return(
	<Provider store = {store}>
		<Router history = {browserHistory}>
			<Route path = {"/"} component = {App}>
			  <IndexRoute component={Products}/>
			  <Route path = {"Login"} component = {Login} />
			  <Route path = {"Products"} component = {Products} />
			  <Route path = {"Product"} component = {Product} />
			  <Route path = "*" component={NotFound} status={404} />
			</Route>
		</Router>
	</Provider>
	);
  }
}

ReactDOM.render( <Routes /> , document.getElementById('world'));