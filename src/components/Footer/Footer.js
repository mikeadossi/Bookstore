import './footer.css'
import React from 'react';

export default class Footer extends React.Component{
  render(){
    return(
      <div className="footer_container">
        <p className="footer_text">Made with </p><span className="footer_heart fa fa-heart"></span><p className="footer_text"> in Oakland</p>
      </div>
    );
  };
}
