import './listing.css'
import React from 'react';

export default class Listing extends React.Component{

  render(){
    return(
      <div className="listing_comp_container">
        <div className="listing_container"></div>
      <div className="listing_title">Book Listing</div>
      </div>
    );
  };
}
