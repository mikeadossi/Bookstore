import './nav.css'
import React from 'react';
import { Link }  from 'react-router-dom';

export default class Nav extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      menu_styling : 'nav_top_hamburger fa fa-bars fa-lg',
      menu_wide_styling : 'nav_hamburger fa fa-bars fa-lg',
      menu_open : 'nav_link_bottom display_none',
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    console.log('click!')
    let menu = this.state.menu_styling;
    let menu_wide = this.state.menu_wide_styling;

    if(menu === 'nav_top_hamburger fa fa-bars fa-lg'){
      this.setState({
        menu_styling : 'nav_top_hamburger fa fa-close fa-lg',
        menu_wide_styling : 'nav_hamburger fa fa-close fa-lg',
        menu_open : 'nav_link_bottom display_block'
      })
      return
    } else {
      this.setState({
        menu_styling : 'nav_top_hamburger fa fa-bars fa-lg',
        menu_wide_styling : 'nav_hamburger fa fa-bars fa-lg',
        menu_open : 'nav_link_bottom display_none'
      })
      return
    }
  }

  render(){
    return(
      <div className="nav_container">
        <div className="nav_top_container">
          <Link to="/" className="nav_title">Bookstore</Link>
          <div className={this.state.menu_wide_styling} aria-hidden="true" onClick={this.toggleMenu}></div>
          <div className="nav_top_search">
            <input className="nav_input" placeholder="search" />
            <button className="nav_search_btn">submit</button>
          </div>
          <div className={this.state.menu_styling} aria-hidden="true" onClick={this.toggleMenu}></div>
          <div className="nav_wide_links_container">
            <Link to="/logIn" className="nav_wide_links nav_wide_logIn">log in</Link>
            <Link to="/signUp" className="nav_wide_links">sign up</Link>
            <Link to="/about" className="nav_wide_links">about</Link>
            <Link to="/account" className="nav_wide_links">account</Link>
          </div>
        </div>
        <div className="nav_links_container">
          <div className="nav_links nav_links_search">
            <input className="nav_input" placeholder="search" />
            <button className="nav_search_btn">submit</button>
          </div>
          <div className={this.state.menu_open}>
            <Link to="/logIn"><div className="nav_links">log in</div></Link>
            <Link to="/signUp"><div className="nav_links">sign up</div></Link>
            <Link to="/about"><div className="nav_links">about</div></Link>
            <Link to="/account"><div className="nav_links">account</div></Link>
          </div>
        </div>
      </div>
    );
  };
}
