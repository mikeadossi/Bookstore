import './access.css'
import React from 'react';
import SignUp from 'components/SignUp/SignUp';
import LogIn from 'components/LogIn/LogIn';

export default class Access extends React.Component{

  render(){
    return(
      <div className="access_comp_container">
        <LogIn />
      </div>
    );
  };
}
