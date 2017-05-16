import './home.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class Home extends React.Component{

  render(){
    return(
      <div>
        <Nav />
          <div className="home_container">
            <div className="home_welcome">Welcome</div>
          </div>
        <Footer />
      </div>
    );
  };
}
