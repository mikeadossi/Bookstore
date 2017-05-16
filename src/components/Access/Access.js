import './access.css'
import React from 'react';
import SignUp from 'components/SignUp/SignUp';

export default class Access extends React.Component{

  render(){
    return(
      <div className="access_comp_container">
        <SignUp />
      </div>
    );
  };
}
