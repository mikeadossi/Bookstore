import './home.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import BooksList from 'components/BooksList/BooksList';

export default class Home extends React.Component{

  constructor(props){
    super(props)
    console.log('props obj: ',props)
  }


  render(){
    return(
      <div>
        <Nav />
          <div className="home_container">
            <div className="home_welcome">Welcome</div>
            <BooksList />
          </div>
        <Footer />
      </div>
    );
  };
}
