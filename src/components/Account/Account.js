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
      account_addBook_div: 'app_displayBlock',
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
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  searchDb() {
  //  console.log(this.state.query)
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

  saveData(e){
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  addNewBook(){
    console.log('this.state =====> ',this.state)

    // fetch('http://localhost:8080/api/bookstore_db', {
    //   method: "POST",
    //   body: {
    //     title : this.state.account_add_title,
    //     author_name : this.state.account_author_name
    //   }
    // });

    axios.post('http://localhost:8080/api/bookstore_db', {
      title : this.state.account_add_title,
      author_name : this.state.account_author_name
    })
    .then(function (response) {
      console.log(response);
      this.setState({
        account_add_title: '',
        account_add_author_name: '',
        account_add_image_url: '',
        account_add_description : '',
        account_add_isbn: ''
      })
    })
    .catch(function (error) {
      console.log(error);
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
    // console.log('this.state ==> ',this.state)
    return(
      <div>
        <Nav />
          <div className="account_comp_container">
            <div className="account_container">
              <div className="account_title">Account</div>
            <input className="account_search_input" placeholder="search database" onChange={this.handleChange}/>
            <button onClick={this.searchDb}>search</button>
            <button>add new book</button>
            {this.renderResult()}
            <div className={this.account_addBook_div}>
              <div className="account_addbook_divs"><div className="account_label">Book title: </div><input name="account_add_title" onChange={this.saveData} /></div>
            <div className="account_addbook_divs"><div className="account_label">Image Url: </div><input name="account_image_url"/></div>
              <div className="account_addbook_divs"><div className="account_label">Author name: </div><input name="account_author_name" onChange={this.saveData}/></div>
              <div className="account_addbook_divs"><div className="account_label">Price: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Genre: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Publisher: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Isbn: </div><input /></div>
              <div className="account_addbook_divs"><div className="account_label">Description: </div><textarea className="account_addBook_textarea"/></div>
              <button onClick={this.addNewBook}>Add Book</button>
            </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
