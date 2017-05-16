import './listing.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class Listing extends React.Component{

  render(){
    return(
      <div>
        <Nav />
          <div className="listing_comp_container">
            <div className="listing_container"></div>
            <div className="listing_title">Book Listing</div>
          </div>
        <Footer />
      </div>
    );
  };
}
