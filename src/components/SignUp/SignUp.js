import './signup.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Link from 'react-router-dom';

export default class SignUp extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      info: [],
      signup_username: '',
      signup_password: '',
      signup_reenter_password: ''
    }

    this.signIn = SignIn.bind(this);
    this.saveSignUpUserName = saveSignUpUserName.bind(this);
    this.saveSignUpPassword = saveSignUpPassword.bind(this);
    this.saveSignUpReenterPassword = saveSignUpReenterPassword.bind(this);
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
    let saveSignUpReenterPassword = this.state.saveSignUpReenterPassword;
    let saveSignUpPassword = this.state.saveSignUpPassword;
    let saveSignUpUserName = this.saveSignUpUserName;
    let info = this.state.info;

    if(!saveSignUpUserName){
      console.log('enter username');
      return;
    } else if(!saveSignUpPassword ){
      console.log('enter password')
      return;
    } else if(!saveSignUpReenterPassword){
      console.log('please re-enter password')
      return;
    } else if(saveSignUpPassword !== saveSignUpReenterPassword){
      console.log('passwords do not match');
      return;
    }

    info.push(saveSignUpUserName, saveSignUpPassword);

    this.setState({
      info: info
    })

    console.log('this.state.info ----> ',this.state.info)
    fetch( 'http://localhost:8080/api/bookstore_db?info=' + this.state.info )
      .catch((error) => {
        this.setState({
          error: error
        })
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
          </div>
        <Footer />
      </div>
    );
  };
}
