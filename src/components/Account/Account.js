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
      searchResult: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchDb = this.searchDb.bind(this);
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
            <button onClick={this.searchDb}>submit</button>
            {this.renderResult()}
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
