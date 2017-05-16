import './footer.css'
import React from 'react';
import { Link }  from 'react-router-dom';

export default class Footer extends React.Component{
  render(){
    return(
      <div className="footer_container">
        <div className="footer_sub_div">
          <Link to="/about" className="footer_link">about</Link>
          <Link to="/home" className="footer_link">home</Link>
          <Link to="/account" className="footer_link">account</Link>
          <Link to="/inventory" className="footer_link">inventory</Link>
        </div>
        <p className="footer_text">Made with </p><span className="footer_heart fa fa-heart"></span><p className="footer_text"> in Oakland</p>
      </div>
    );
  };
}
