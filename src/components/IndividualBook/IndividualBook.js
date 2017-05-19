import './individualBook.css'
import React from 'react'
import { Link }  from 'react-router-dom';

export default class IndividualBook extends React.Component{
  constructor(props) {
    super(props)
  }


  renderBookSection() {
    const { list_price, publisher, id, genre, title, image_url, description, isbn, author_name } = this.props
    return( <td className="individualBook_container">
      <div>
        <div><input className="individualBook_title individualBook_input" value={title}/></div>
        <div><input className="individualBook_image individualBook_input" value={image_url}/></div>
        <div><input className="individualBook_name individualBook_input" value={author_name}/></div>
        <div><input className="individualBook_price individualBook_input" value={list_price}/></div>
        <div><input className="individualBook_genre individualBook_input" value={genre}/></div>
        <div><input className="individualBook_publisher individualBook_input" value={publisher}/></div>
        <div><input className="individualBook_isbn individualBook_input" value={isbn}/></div>
        <br/>
      <div><textarea className="individualBook_description" value={description}/></div>
      <div>
        <button className="individualBook_edit individualBook_btns">Edit</button>
        <button className="individualBook_save_changes individualBook_btns">Save Changes</button>
        <button className="individualBook_delete individualBook_btns">Delete</button>
      </div>
      </div>
    </td> )
  }


  render(){
    return( <div className="individualBook_renderBook">{this.renderBookSection()}</div> )
  }


}

// title={title} image_url={image_url} description={description} isbn={isbn} author_name={author_name}
