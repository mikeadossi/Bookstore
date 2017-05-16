import './nav.css'
import React from 'react';

export default class Nav extends React.Component{

  render(){
    return(
      <div className="nav_container">
        <div className="nav_top_container">
          <div className="nav_title">Bookstore</div>
        <div className="nav_hamburger fa fa-bars fa-lg" aria-hidden="true"></div>
          <div className="nav_top_search">
            <input className="nav_input" placeholder="search" />
            <button className="nav_search_btn">submit</button>
          </div>
          <div className="nav_top_hamburger fa fa-bars fa-lg" aria-hidden="true"></div>
          <div className="nav_wide_links_container">
            <div className="nav_wide_links">log in</div>
            <div className="nav_wide_links">sign up</div>
            <div className="nav_wide_links">home</div>
            <div className="nav_wide_links">account</div>
          </div>
        </div>
        <div className="nav_links_container">
          <div className="nav_links nav_links_search">
            <input className="nav_input" placeholder="search" />
            <button className="nav_search_btn">submit</button>
          </div>
          <div className="nav_link_bottom">
            <div className="nav_links">log in</div>
            <div className="nav_links">sign up</div>
            <div className="nav_links">home</div>
            <div className="nav_links">account</div>
          </div>
        </div>
      </div>
    );
  };
}
