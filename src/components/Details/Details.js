import './details.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class Details extends React.Component{

  render(){
    console.log('props => ',this.props)
    return(
      <div>
        <Nav />
          <div className="details_comp_container">
            <div className="details_container">
              <div className="details_title">Details</div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
