import React from 'react';
import { render } from 'react-dom';
import Home from 'components/Home/Home';

export default class App extends React.Component{
  render(){
    return(
      <div className="app_container">
        <Home />
      </div>
    );
  };
}
