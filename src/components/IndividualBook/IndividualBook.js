import './individualBook.css'
import React from 'react'
import { Link }  from 'react-router-dom';

export default class IndividualBook extends React.Component{
  constructor(props) {
    super(props)
  }


  renderBookSection() {
    const { id, genre, title, image_url, description, isbn, author_name } = this.props
    return( <td>
      <div>
        <h3><Link to={"/details/"+id}>{title}</Link></h3>
        <div><Link to={"/details/"+id}><img className="book_cover" src={image_url} /></Link></div>
        <div>{author_name}</div>
        <div>Genre: {genre}</div>
        <div>ISBN: {isbn}</div>
        <br/>
        <p>Description: {description}</p>
      </div>
    </td> )
  }


  render(){
    return( <tr>{this.renderBookSection()}</tr> )
  }


}

// title={title} image_url={image_url} description={description} isbn={isbn} author_name={author_name}
