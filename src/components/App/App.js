import './app.css'
import React from 'react';
import { render } from 'react-dom';
import Home from 'components/Home/Home';
import Access from 'components/Access/Access';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class App extends React.Component{
  render(){
    return(
      <div className="app_container">
        <Nav />
        <Access />
        <Footer />
      </div>
    );
  };
}
