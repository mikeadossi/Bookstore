import './signup.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Link from 'react-router-dom';

export default class SignUp extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      info: {},
      signup_username: '',
      signup_password: '',
      signup_reenter_password: '',
      signup_message_div: 'app_displayNone',
      signup_message: ''
    }

    this.signIn = this.signIn.bind(this);
    this.saveSignUpUserName = this.saveSignUpUserName.bind(this);
    this.saveSignUpPassword = this.saveSignUpPassword.bind(this);
    this.saveSignUpReenterPassword = this.saveSignUpReenterPassword.bind(this);
  }


  saveSignUpUserName(e){
    e.preventDefault()
    let targetValue = e.target.value;
    this.setState({
      signup_username : targetValue
    })
  }

  saveSignUpPassword(e){
    e.preventDefault()
    let targetValue = e.target.value;
    this.setState({
      signup_password : targetValue
    })
  }

  saveSignUpReenterPassword(e){
    e.preventDefault()
    let targetValue = e.target.value;
    this.setState({
      signup_reenter_password : targetValue
    })
  }


  signIn() {
    let saveSignUpReenterPassword = this.state.signup_reenter_password;
    let saveSignUpPassword = this.state.signup_password;
    let saveSignUpUserName = this.state.signup_username;
    let info = this.state.info;

    if(!saveSignUpUserName){
      this.setState({
        signup_message: 'please enter a username',
        signup_message_div: 'app_displayBlock'
      })
      return;
    } else if(!saveSignUpPassword ){
      this.setState({
        signup_message: 'please enter a password',
        signup_message_div: 'app_displayBlock'
      })
      return;
    } else if(!saveSignUpReenterPassword){
      this.setState({
        signup_message: 'please re-enter password',
        signup_message_div: 'app_displayBlock'
      })
      return;
    } else if(saveSignUpPassword !== saveSignUpReenterPassword){
      this.setState({
        signup_message: 'passwords do not match',
        signup_message_div: 'app_displayBlock'
      })
      return;
    }

    info = { username: saveSignUpUserName, password: saveSignUpReenterPassword}

    this.setState({
      info: info,
      signup_message_div: 'app_displayNone'
    })

  }

  render(){
    return(
      <div>
        <Nav />
          <div className="signup_comp_container">
            <div className="signup_container">
              <div className="signup_title">Sign Up</div>
              <div className="signup_input_containers">
                <div className="signup_labels">username: </div>
                <input className="signup_email_input signup_input" placeholder="enter email address" onChange={this.saveSignUpUserName}/>
              </div>
              <div className="signup_input_containers">
                <div className="signup_labels">enter password: </div>
                <input className="signup_password_input signup_input" placeholder="password" onChange={this.saveSignUpPassword}/>
              </div>
              <div className="signup_input_containers">
                <div className="signup_labels">re-enter password: </div>
              <input className="signup_reenter_password_input signup_input" placeholder="password" onChange={this.saveSignUpReenterPassword}/>
              </div>
              <button onClick={this.signIn} className="signup_submit_btn">submit</button>
            </div>
            <div className="signup_message_container">
              <div className={this.state.signup_message_div}>{this.state.signup_message}</div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
