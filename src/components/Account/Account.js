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
      account_title: '',
      account_image_url: '',
      account_author_name: '',
      account_price: '',
      account_genre: '',
      account_publisher: '',
      account_isbn: '',
      account_description : '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  searchDb() {
    fetch( 'http://localhost:8888/api/bookstore_db?query=' + this.state.query )
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

  addNewBook(){

    axios.post('http://localhost:8888/api/bookstore_db', {
      title : this.state.account_title,
      author_name : this.state.account_author_name,
      list_price : this.state.account_price,
      genre : this.state.account_genre,
      publisher : this.state.account_publisher,
      description : this.state.account_description,
      isbn : this.state.account_isbn,
      image_url : this.state.account_image_url
    })
    .then(function (response) {
      this.setState({
        account_title: '',
        account_image_url: '',
        account_author_name: '',
        account_price: '',
        account_genre: '',
        account_publisher: '',
        account_isbn: '',
        account_description : '',
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
              <div className="account_title">Account</div>
              <div className="account_deviation"></div>
              <h3>Add Book</h3>
              <div className={this.state.account_addBook_div} id="account_addBook_container">
                <div className="account_addbook_divs">
                  <div className="account_label">Book title: </div>
                  <input name="account_title" onChange={this.saveData} />
                </div>
                <div className="account_addbook_divs">
                  <div className="account_label">Image Url: </div>
                  <input name="account_image_url" onChange={this.saveData} />
                </div>
                <div className="account_addbook_divs">
                  <div className="account_label">Author name: </div>
                  <input name="account_author_name" onChange={this.saveData}/>
                </div>
                <div className="account_addbook_divs">
                  <div className="account_label">Price: </div>
                  <input name="account_price" onChange={this.saveData}/>
                </div>
                <div className="account_addbook_divs">
                  <div className="account_label">Genre: </div>
                  <input name="account_genre" onChange={this.saveData}/>
                </div>
                <div className="account_addbook_divs">
                  <div className="account_label">Publisher: </div>
                  <input name="account_publisher" onChange={this.saveData}/>
                </div>
                <div className="account_addbook_divs">
                  <div className="account_label">Isbn: </div>
                  <input name="account_isbn" onChange={this.saveData}/>
                </div>
                <div className="account_addbook_textarea">
                  <div className="account_textarea_label">Description: </div>
                  <textarea name="account_description" className="app_textarea" onChange={this.saveData}/>
                </div>
                <button onClick={this.addNewBook}>Add Book</button>
              </div>
              <div className="account_deviation"></div>
              <h3>Edit Book</h3>
              <div className="account_search_container">
                <input className="account_search_input" placeholder="search database" onChange={this.handleChange}/>
                <button onClick={this.searchDb}>search</button>
              </div>
              <div className="account_addBook_render">
                {this.renderResult()}
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
