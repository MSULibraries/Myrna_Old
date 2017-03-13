//Combines reducers into one single constant, 
//This allows for the specific reducer to be
//Refrenced outside Redux using dot notation.

import {combineReducers} from 'redux';
import AllReducer from './allReducers.js';

const allReducers = combineReducers({ 
    add: AllReducer
	//spot for next reducer seperated by comma
});

export default allReducers;