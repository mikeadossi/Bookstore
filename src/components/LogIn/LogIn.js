import './logIn.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class LogIn extends React.Component{

  render(){
    return(
      <div className="logIn_comp_container">
        <div className="logIn_container">
          <div className="logIn_title">Log In</div>
          <div className="logIn_input_containers">
            <div className="logIn_labels">username: </div>
            <input className="logIn_email_input logIn_input" placeholder="enter email address" />
          </div>
          <div className="logIn_input_containers">
            <div className="logIn_labels">enter password: </div>
            <input className="logIn_password_input logIn_input" placeholder="password" />
          </div>
          <button className="logIn_logIn_submit">submit</button>
        </div>
      </div>
    );
  };
}
