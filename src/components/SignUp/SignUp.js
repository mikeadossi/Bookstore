import './signup.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class SignUp extends React.Component{

  render(){
    return(
      <div>
        <Nav />
          <div className="signup_comp_container">
            <div className="signup_container">
              <div className="signup_title">Sign Up</div>
              <div className="signup_input_containers">
                <div className="signup_labels">username: </div>
                <input className="signup_email_input signup_input" placeholder="enter email address" />
              </div>
              <div className="signup_input_containers">
                <div className="signup_labels">enter password: </div>
                <input className="signup_password_input signup_input" placeholder="password" />
              </div>
              <div className="signup_input_containers">
                <div className="signup_labels">re-enter password: </div>
              <input className="signup_reenter_password_input signup_input" placeholder="password" />
              </div>
              <button className="signup_submit_btn">submit</button>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
