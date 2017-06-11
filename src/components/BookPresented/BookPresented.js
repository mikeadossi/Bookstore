import './bookPresented.css'
import React from 'react'
import { Link }  from 'react-router-dom';

export default class BookPresented extends React.Component{
  constructor(props) {
    super(props)
  }


  renderBook() {
    const { list_price, publisher, id, genre, title, image_url, description, isbn, author_name } = this.props
    return(
      <div className="book_presented_cover">
        <Link to={"/details/"+id}><img className="book_cover" src={image_url} /></Link>
      </div>
    )
  }


  render(){
    return( <div className="book_rendered_covers">{this.renderBook()}</div> )
  }


}
