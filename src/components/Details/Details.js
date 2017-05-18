import './details.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class Details extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      bookToDisplay: []
    }
    console.log('props obj (from Details) ====> ',props)
    console.log('props obj (from Details) ====> ',props.match.params.id)
  }
  // 
  // componentDidMount(){
  //   fetch( 'http://localhost:8080/api/bookstore_db/'+props.match.params.id )
  //     .then( result => result.json() )
  //     .then( json => {
  //       console.log('json from Details.js: ',json)
  //       this.setState({ bookToDisplay: json.data })
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         error: error
  //       })
  //     })
  // }

  render(){
    console.log('bookToDisplay => ',this.state.bookToDisplay)
    return(
      <div>
        <Nav />
          <div className="details_comp_container">
            <div className="details_container">
              <div className="details_title">Details</div>
              <div>Author</div>
            </div>
          </div>
        <Footer />
      </div>
    );
  };
}
