import './account.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class Account extends React.Component{

  render(){
    return(
      <div>
        <Nav />
          <div className="account_comp_container">
            <div className="account_container">
              <div className="account_title">Account</div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
