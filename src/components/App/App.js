import './app.css'
import React from 'react';
import { render } from 'react-dom';
import Home from 'components/Home/Home';
import Access from 'components/Access/Access';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Listing from 'components/Listing/Listing';
import Account from 'components/Account/Account';
import Details from 'components/Details/Details';
import { Link, Route, HashRouter, Switch } from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return(
      <div className="app_container">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/login" component={ Access } />
            <Route exact path="/listing" component={ Listing } />
            <Route exact path="/account" component={ Account } />
            <Route exact path="/details" component={ Details } />
            <Route exact path="/access" component={ Access } />
          </Switch>
        </HashRouter>
      </div>
    );
  };
}
