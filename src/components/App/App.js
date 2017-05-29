import './app.css'
import React from 'react';
import { render } from 'react-dom';
import Home from 'components/Home/Home';
import LogIn from 'components/LogIn/LogIn';
import SignUp from 'components/SignUp/SignUp';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Listing from 'components/Listing/Listing';
import Account from 'components/Account/Account';
import Details from 'components/Details/Details';
import About from 'components/About/About';
import BooksList from 'components/BooksList/BooksList';
import HomeBookList from 'components/HomeBookList/HomeBookList';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

export default class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      allBooks : []
    }
  }

  componentDidMount(){
    fetch( 'http://localhost:8888/api/bookstore_db' )
      .then( result => result.json() )
      .then( json => {
        this.setState({ allBooks: json.data })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  render(){
    const allBooks = this.state.allBooks
    const HomeBookListComponent = () => <HomeBookList allBooks={allBooks} />


    return(
      <div className="app_container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ () => <Home allBooks={allBooks} /> } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/logIn" component={ LogIn } />
            <Route exact path="/signUp" component={ SignUp } />
            <Route exact path="/listing" component={ Listing } />
            <Route exact path="/account" component={ Account } />
            <Route exact path="/details" component={ Details } />
            <Route exact path="/about" component={ About } />
            <Route path="/details/:id" component={ Details } />
            <Route path="/bookList" component={ HomeBookListComponent }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
}
