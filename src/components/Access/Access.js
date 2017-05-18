import './access.css'
import React from 'react';
import SignUp from 'components/SignUp/SignUp';
import LogIn from 'components/LogIn/LogIn';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class Access extends React.Component{

  render(){
    return(
      <div className="access_comp_container">
        <Nav />
        <SignUp />
        <Footer />
      </div>
    );
  };
}
