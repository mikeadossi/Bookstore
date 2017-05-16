import './nav.css'
import React from 'react';
import { Link }  from 'react-router-dom';

export default class Nav extends React.Component{

  render(){
    return(
      <div className="nav_container">
        <div className="nav_top_container">
          <Link to="/home" className="nav_title">Bookstore</Link>
        <div className="nav_hamburger fa fa-bars fa-lg" aria-hidden="true"></div>
          <div className="nav_top_search">
            <input className="nav_input" placeholder="search" />
            <button className="nav_search_btn">submit</button>
          </div>
          <div className="nav_top_hamburger fa fa-bars fa-lg" aria-hidden="true"></div>
          <div className="nav_wide_links_container">
            <Link to="/access" className="nav_wide_links">log in</Link>
            <Link to="/access" className="nav_wide_links">sign up</Link>
            <Link to="/home" className="nav_wide_links">home</Link>
            <Link to="/account" className="nav_wide_links">account</Link>
          </div>
        </div>
        <div className="nav_links_container">
          <div className="nav_links nav_links_search">
            <input className="nav_input" placeholder="search" />
            <button className="nav_search_btn">submit</button>
          </div>
          <div className="nav_link_bottom">
            <Link to="/access" className="nav_links">log in</Link>
            <Link to="/access" className="nav_links">sign up</Link>
            <Link to="/home" className="nav_links">home</Link>
            <Link to="/account" className="nav_links">account</Link>
          </div>
        </div>
      </div>
    );
  };
}
