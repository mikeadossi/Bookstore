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
import About from 'components/About/About';
import BooksList from 'components/BooksList/BooksList';
import { Link, Route, HashRouter, Switch } from 'react-router-dom';

export default class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      allBooks : []
    }
  }

  componentDidMount(){
    fetch( 'http://localhost:8080/api/bookstore_db' )
      .then( result => result.json() )
      .then( json => {
        console.log(json)
        this.setState({ allBooks: json.data })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  render(){
    console.log('app render => ',this.state);
    const allBooks = this.state.allBooks
    const BooksListComponent = () => <BooksList allBooks={allBooks} />


    return(
      <div className="app_container">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={ () => <Home allBooks={allBooks} /> } />
            <Route exact path="/home/:id" component={ Home } />
            <Route exact path="/login" component={ Access } />
            <Route exact path="/listing" component={ Listing } />
            <Route exact path="/account" component={ Account } />
            <Route exact path="/details" component={ Details } />
            <Route exact path="/access" component={ Access } />
            <Route exact path="/about" component={ About } />
            <Route path="/bookList" component={ BooksListComponent }/>
          </Switch>
        </HashRouter>
      </div>
    );
  };
}
