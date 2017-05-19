import React from 'react';
import BookPresented from 'components/BookPresented/BookPresented';

export default class HomeBookList extends React.Component{
  constructor(props){
    super(props)
  }

  renderItems() {

    // const { toggleTask, deleteTask, saveTask } = this.props
    console.log('allBooks: ',this.props)
    return this.props.allBooks.map( (book, index) =>
      <BookPresented
        {...book}
        key={`book-${index}`} />
    )
  }

  render() {

    return(
      <table>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
