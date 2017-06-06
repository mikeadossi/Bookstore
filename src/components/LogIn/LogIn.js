import './logIn.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import axios from 'axios';

export default class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }
  handleUsernameChange(evt){
    this.setState({
      username: evt.target.value
    })
  }

  handlePasswordChange(evt){
    this.setState({
      password: evt.target.value
    })
  }
handleSubmit(evt){
  evt.preventDefault();
    console.log('this.state =====> ',this.state);
  // axios.post('http://localhost:8888/api/logIn',{username:this.state.username, password:this.state.password})
  // ({
  //   method: 'POST',
  //   url: 'http://localhost:8888/api/logIn',
  //   data: this.state
  // })
  fetch('http://localhost:8888/api/logIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify(this.state)
  }).then(function(response) {
    console.log(response.type); // "opaque"
  });
}
  render(){
    return(
      <div>
        <Nav />
      <form className="logIn_comp_container" onSubmit={this.handleSubmit} >
            <div className="logIn_container">
              <div className="logIn_title">Log In</div>
              <div className="logIn_input_containers">
                <div className="logIn_labels">username: </div>
              <input name='username' value={this.state.username} onChange={this.handleUsernameChange} className="logIn_email_input logIn_input" placeholder="enter email address" />
              </div>
              <div className="logIn_input_containers">
                <div className="logIn_labels">enter password: </div>
              <input name='password' value={this.state.password} onChange={this.handlePasswordChange} className="logIn_password_input logIn_input" placeholder="password" />
              </div>
              <button className="logIn_logIn_submit" type="submit">submit</button>
            </div>
          </form>
        <Footer />
      </div>
    );
  };

}
