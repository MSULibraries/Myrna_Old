/* Dependencies being included*/
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import firebase from 'firebase';
import Config from '../credentials/'

/* Firebase credentials*/
const app = firebase.initializeApp({
    apiKey: Config.apiKey,
    authDomain: Config.authDomain,
    databaseURL: Config.databaseURL,
    storageBucket: Config.storageBucket,
    messagingSenderId: Config.messagingSenderId
});

/* Extension of React.Js component class
// Methods set here
// State set here
// Props inheritied here
*/
export default class Home extends Component {
    constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.credits = this.credits.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.login = this.login.bind(this);
    this.state = {userName: '', password: '', org: '', valid: false};
  }
  
   checkUser() { 
    const email = this.state.userName;
    const password = "1";
    const ref = this.refs.email.style;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;  
    console.log(errorMessage); 
    if (errorCode === 'auth/user-not-found') {
     ref.color = 'red';
     this.setState({valid: true});
    }
    });
  }
  
  /* Creates new user with login (email) and custom password.
  // Error given if fails, via callback promises
  */
  
  register() {
    console.log('user verified');  
    console.log(this.state.userName); 
    console.log(this.state.password); 
    const email = this.state.userName;
    const password = this.state.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
      console.log('user created');
    })
    .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;  
    console.log(errorMessage); 
    });
  }
  
   login() {
   const email = this.state.userName;
   const password = this.state.password;
   firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      //browserHistory.push('/Login');
      console.log('logged in');
     })
   }

  
  /* Sets the State for the username and password for auth.
  // Gets ran once the user begins typing
  // Switch statement: case 1 - username, case 2 - password, default - user not typing, so break
  */ 
  credits(event, val){
    switch (val) {
     case 1:
       this.setState({ userName: event.target.value });
     break;
   
     case 2:
     this.setState({ password: event.target.value });
     break;
     
     case 3:
     this.setState({ org: event.target.value });
     break;
   
     default:
     break; 
     }
   }
   
   /* React.render method and JSX*/
   render() {
     return (
      <div>
        <Helmet title="Home"/>
        <label ref = "email" >User Name: <input value = {this.state.userName} onFocus = {() => {this.setState({valid: false}); this.refs.email.style.color = 'black'; }} onChange = { (event) => this.credits(event, 1)} type = "text" /></label><br />
        <label>Password <input value = {this.state.password} onFocus = {this.checkUser} onChange = { (event) => this.credits(event, 2)} type = "password" /></label><br />
        {this.state.valid ? <label> Org <input value = {this.state.org} onChange = { (event) => this.credits(event, 3)}  type = "text" /></label>: <div></div>}<br/>
        {!this.state.valid ? <button onClick = {this.login} className = "btn btn-danger">Login</button> : <div></div>}
        {this.state.valid ? <button onClick = {this.register} className = "btn btn-warning">Register</button> : <div></div>}
      </div> 
    ); 
  }
}// React's Component class ends here.