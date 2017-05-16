import './admin.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class Admin extends React.Component{

  render(){
    return(
      <div>
        <Nav />
          <div className="admin_comp_container">
            <div className="admin_container">
              <div className="admin_title">Admin</div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
