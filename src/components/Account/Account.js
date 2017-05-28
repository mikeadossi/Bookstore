import './account.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import IndividualBook from 'components/IndividualBook/IndividualBook';
import axios from 'axios';

export default class Account extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      searchResult: null,
      account_addBook_div: 'app_displayNone',
      account_add_title: '',
      account_add_author_name: '',
      account_add_image_url: '',
      account_add_description : '',
      account_add_isbn: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
    this.saveData = this.saveData.bind(this);
    this.toggleAddBook = this.toggleAddBook.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  searchDb() {
    fetch( 'http://localhost:8080/api/bookstore_db?query=' + this.state.query )
      .then( result => result.json() )
      .then( json => {
        this.setState({ searchResult: json.data })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  saveData(e){
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  toggleAddBook(){
    let display;
    this.state.account_addBook_div === 'app_displayNone' ? ( display = 'app_displayBlock' ) : ( display = 'app_displayNone' )
    this.setState({
      account_addBook_div: display
    })
  }

  addNewBook(){

    axios.post('http://localhost:8080/api/bookstore_db', {
      title : this.state.account_add_title,
      author_name : this.state.account_author_name
    })
    .then(function (response) {
      this.setState({
        account_add_title: '',
        account_add_author_name: '',
        account_add_image_url: '',
        account_add_description : '',
        account_add_isbn: ''
      })
    })
    .catch(function (error) {

    });
  }


  renderResult() {
    if (!this.state.searchResult) { return; }
    return this.state.searchResult.map( (item, index) =>
      <IndividualBook key={`book-${index}`}
        {...item} />
    )
  }

  render(){
    return(
      <div>
        <Nav />
          <div className="account_comp_container">
            <div className="account_container">
              <div className="account_title">Accounts</div>
            <input className="account_search_input" placeholder="search database" onChange={this.handleChange}/>
            <button onClick={this.searchDb}>search</button>
            <button onClick={this.toggleAddBook}>add new book</button>
            {this.renderResult()}
            <div className={this.state.account_addBook_div} id="account_addBook_container">
              <div className="account_addbook_divs"><div className="account_label">Book title: </div><input name="account_add_title" onChange={this.saveData} /></div>
              <div className="account_addbook_divs"><div className="account_label">Image Url: </div><input name="account_image_url"/></div>
              <div className="account_addbook_divs"><div className="account_label">Author name: </div><input name="account_author_name" onChange={this.saveData}/></div>
              <div className="account_addbook_divs"><div className="account_label">Price: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Genre: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Publisher: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Isbn: </div><input /></div>
            <div className="account_addbook_textarea"><div className="account_textarea_label">Description: </div><textarea className="account_addBook_textarea"/></div>
              <button onClick={this.addNewBook}>Add Book</button>
            </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
