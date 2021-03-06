import './nav.css'
import React from 'react';
import { Link }  from 'react-router-dom';
import Auth from './../../Helpers/Auth.js';

export default class Nav extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      query : null,
      menu_styling : 'nav_top_hamburger fa fa-bars fa-lg',
      menu_wide_styling : 'nav_hamburger fa fa-bars fa-lg',
      menu_open : 'nav_link_bottom display_none',
      nav_logIn_inauthenticated : 'display_inline_block',
      nav_logIn_authenticated : 'display_inline_block',
      search_icon : 'nav_search_icon fa fa-search fa-lg display_block',
      search_bar_toggle : 'nav_top_search_toggle display_none'
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.checkIfAuthenticated = this.checkIfAuthenticated.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.navSearch = this.navSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount(){
    //checkIfAuthenticated();
  }

  logOut(){
    Auth.logout()
    console.log('logged out');
  }

  toggleMenu(){
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

  toggleSearch(){
    // set display_block to fixed top search.
    console.log('searched')
    if(this.state.search_icon === 'nav_search_icon fa fa-search fa-lg display_block'){
      this.setState({
        search_icon : 'nav_search_icon fa fa-search fa-lg visibility-hidden',
        search_bar_toggle : 'nav_top_search_toggle display_block'
      })
    } else {
      this.setState({
        search_icon : 'nav_search_icon fa fa-search fa-lg display_block',
        search_bar_toggle : 'nav_top_search_toggle display_none'
      })
    }
  }

  closeSearch(){
    this.setState({
      search_bar_toggle : 'nav_top_search_toggle display_none',
      search_icon : 'nav_search_icon fa fa-search fa-lg display_block'
    })
  }

  checkIfAuthenticated(){
    // let displayA;
    // let displayB;
    if(!Auth.isLoggedIn()) {
      this.setState({
        nav_logIn_inauthenticated : 'display_inline_block',
        nav_logIn_authenticated : 'display_none'
      })
    } else {
      this.setState({
        nav_logIn_inauthenticated : 'display_none',
        nav_logIn_authenticated : 'display_inline_block'
      })
    }
    //!isAuthenticated ? displayA = "display_block" && displayB = "display_none" : displayA = "display_none" && displayB = "display_block";
    // this.setState({
    //   nav_logIn_inauthenticated : displayA,
    //   nav_logIn_authenticated : displayB
    // })
  }

  navSearch() {
    fetch( 'http://localhost:8888/api/bookstore_db?query=' + this.state.query )
      .then( result => result.json() )
      .then( json => {
        this.setState({ searchResult: json.data })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  render(){
    return(
      <div className="nav_container">
        <div className="nav_top_container">
          <Link to="/" className="nav_title">Bookstore</Link>
          <div className={this.state.search_icon} aria-hidden="true" onClick={this.toggleSearch}></div>
          <div className={this.state.menu_wide_styling} aria-hidden="true" onClick={this.toggleMenu}></div>
          <div className="nav_top_search">
            <input className="nav_input" placeholder="search" />
            <button className="nav_search_btn" onClick={this.navSearch}>submit</button>
          </div>
          <div className="nav_links_container">
            <div className={this.state.search_bar_toggle}>
              <button className="nav_close_search_toggle fa fa-close fa-lg" onClick={this.closeSearch}></button>
              <input className="nav_input nav_input_toggle" placeholder="search" />
              <button className="nav_search_btn">submit</button>
            </div>
            <div className={this.state.menu_open}>
              <Link to="/logIn"><div className="nav_links">log in</div></Link>
              <Link to="/signUp"><div className="nav_links">sign up</div></Link>
              <Link to="/about"><div className="nav_links">about</div></Link>
              <Link to="/account"><div className="nav_links">account</div></Link>
              <Link to='#'><div className="nav_links" onClick={this.logOut}>log out</div></Link>
            </div>
          </div>

          <div className={this.state.menu_styling} aria-hidden="true" onClick={this.toggleMenu}></div>
          <div className="nav_wide_links_container">
            <div id="nav_inauthetnicated_links" className={this.state.nav_logIn_inauthenticated}>
              <Link to="/logIn" className="nav_wide_links nav_wide_logIn">log in</Link>
              <Link to="/signUp" className="nav_wide_links">sign up</Link>
            </div>
            <div className={this.state.nav_logIn_authenticated}>
              <Link to="#" className="nav_wide_links" onClick={this.logOut}>log out</Link>
            </div>
            <Link to="/about" className="nav_wide_links">about</Link>
            <div className={this.state.nav_logIn_inauthenticated}>
              <Link to="/account" className="nav_wide_links">account</Link>
            </div>
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
