import './home.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import HomeBookList from 'components/HomeBookList/HomeBookList';
import BooksList from 'components/BooksList/BooksList';

export default class Home extends React.Component{

  constructor(props){
    super(props)
    console.log('props obj: ',props)
  }


  render(){
    console.log('Home render => ',this.props)
    return(
      <div>
        <Nav />
          <div className="home_container">
            <div className="home_welcome">Welcome</div>
            <HomeBookList allBooks={this.props.allBooks}/>
          </div>
        <Footer />
      </div>
    );
  };
}
