import './account.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import IndividualBook from 'components/IndividualBook/IndividualBook';

export default class Account extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      searchResult: null,
      account_addBook_div: 'app_displayBlock'
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  searchDb() {
    console.log(this.state.query)
    fetch( 'http://localhost:8080/api/bookstore_db?query=' + this.state.query )
      .then( result => result.json() )
      .then( json => {
        // console.log('json from Details.js: ',json)
        this.setState({ searchResult: json.data })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  addNewBook(){
    // if(this.state.account_addBook_div === 'app_displayBlock') ? 
    //   this.setState({account_addBook_div : 'app_displayNone'}) :
    //   this.setState({account_addBook_div : 'app_displayBlock'})
  }

  renderResult() {
    if (!this.state.searchResult) { return; }
    return this.state.searchResult.map( (item, index) =>
      <IndividualBook key={`book-${index}`}
        {...item} />
    )
  }

  render(){
    console.log('this.state ==> ',this.state)
    return(
      <div>
        <Nav />
          <div className="account_comp_container">
            <div className="account_container">
              <div className="account_title">Account</div>
            <input className="account_search_input" placeholder="search database" onChange={this.handleChange}/>
            <button onClick={this.searchDb}>search</button>
            <button onClick={this.addNewBook}>add new book</button>
            {this.renderResult()}
            <div className={this.account_addBook_div}>
              <div className="account_addbook_divs"><div className="account_label">Book title: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Image Url: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Author name: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Price: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Genre: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Publisher: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Isbn: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Description: </div><textarea className="account_addBook_textarea"/></div>
              <button>Save Book</button>
            </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
