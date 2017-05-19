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

  componentWillMount(){
    fetch( 'http://localhost:8080/api/bookstore_db/'+this.props.match.params.id )
      .then( result => result.json() )
      .then( json => {
        console.log('json from Details.js: ',json)
        this.setState({ bookToDisplay: json.data })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  render(){
    console.log('bookToDisplay => ',this.state.bookToDisplay)
    const bookData = this.state.bookToDisplay;
    return(
      <div>
        <Nav />
          <div className="details_comp_container">
            <div className="details_container">
              <div className="details_title">Details</div>
              <h3>{bookData.title}</h3>
              <div>{bookData.author_name}</div>
              <div><img className="details_cover_img" src={bookData.image_url}/></div>
              <div>Price: {bookData.list_price}</div>
              <div>Genre: {bookData.genre}</div>
              <div>Publisher: {bookData.publisher}</div>
              <div>ISBN: {bookData.isbn}</div>
              <br/>
              <div>{bookData.description}</div>
            </div>
          </div>
          <div className="details_review_container">
            <h3 className="details_headers">Reviews</h3>
          <div className="details_review">
            <p className="details_review_username">Adam1992</p>
            <p className="details_review_comment">This was a marvelous read, enjoyed it from cover to cover.</p>
          </div>
          </div>
          <div className="details_comment_container">
            <h3 className="details_headers">Leave a review</h3>
            <textarea className="details_comment_box" />
          <button className="details_submit_btn">submit</button>
          </div>
        <Footer />
      </div>
    );
  };
}
