import './bookPresented.css'
import React from 'react'
import { Link }  from 'react-router-dom';

export default class BookPresented extends React.Component{
  constructor(props) {
    super(props)
  }


  renderBook() {
    const { list_price, publisher, id, genre, title, image_url, description, isbn, author_name } = this.props
    return( <td>
      <div>
        <div><Link to={"/details/"+id}><img className="book_cover" src={image_url} /></Link></div>
      </div>
    </td> )
  }


  render(){
    return( <tr>{this.renderBook()}</tr> )
  }


}
