import './about.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class About extends React.Component{

  render(){
    return(
      <div>
        <Nav />
          <div className="about_comp_container">
            <div className="about_container">
              <div className="about_title">About</div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
