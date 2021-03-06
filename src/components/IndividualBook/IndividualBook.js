import './individualBook.css'
import React from 'react'
import { Link }  from 'react-router-dom';
import axios from 'axios';

export default class IndividualBook extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      author_name: props.author_name,
      list_price: props.list_price,
      publisher: props.publisher,
      id: props.id,
      genre: props.genre,
      image_url: props.image_url,
      description: props.description,
      isbn: props.isbn
    };
    this.saveData = this.saveData.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  saveData(e){
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  updateBook(){
    const updatedBook = this.state;
    const {id} = this.state;
    delete updatedBook.id

    axios.put(`http://localhost:8888/api/bookstore_db/${id}/update`,
      updatedBook
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deleteBook(){
    const {id} = this.state;

    axios.delete(`http://localhost:8888/api/bookstore_db/${id}`)
    .then(function (response) {
      console.log('deleted ',response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  renderBookSection() {
    const { list_price, publisher, id, genre, title, image_url, description, isbn, author_name } = this.state
    return( <div className="individualBook_container">
      <div>
        <div>
          <input className="individualBook_title individualBook_input" value={title} name="title" onChange={this.saveData}/>
        </div>
        <div>
          <input className="individualBook_image individualBook_input" value={image_url} name="image_url" onChange={this.saveData} />
        </div>
        <div>
          <input className="individualBook_name individualBook_input" value={author_name} name="author_name" onChange={this.saveData} />
        </div>
        <div>
          <input className="individualBook_price individualBook_input" value={list_price} name="list_price" onChange={this.saveData} />
        </div>
        <div>
          <input className="individualBook_genre individualBook_input" value={genre} name="genre" onChange={this.saveData} />
        </div>
        <div>
          <input className="individualBook_publisher individualBook_input" value={publisher} name="publisher" onChange={this.saveData} />
        </div>
        <div>
          <input className="individualBook_isbn individualBook_input" value={isbn} name="isbn" onChange={this.saveData} />
        </div>
        <br/>
        <div>
          <textarea className="app_textarea" value={description} name="description" onChange={this.saveData}/>
        </div>
        <div>
          <button className="individualBook_save_changes individualBook_btns" onClick={this.updateBook}>
            Save Changes
          </button>
          <button className="individualBook_delete individualBook_btns" onClick={() => {if(confirm('Are you sure you want to delete this book?')) {this.deleteBook()};}}>
            Delete
          </button>
        </div>
      </div>
    </div> )
  }


  render(){
    return( <div className="individualBook_renderBook">{this.renderBookSection()}</div> )
  }


}

// title={title} image_url={image_url} description={description} isbn={isbn} author_name={author_name}
