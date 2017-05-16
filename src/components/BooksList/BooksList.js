import React from 'react';
import IndividualBook from 'components/IndividualBook/IndividualBook';

export default class BooksList extends React.Component{
  constructor(props){
    super(props)
  }

  renderItems() {

    // const { toggleTask, deleteTask, saveTask } = this.props
    console.log('allBooks: ',this.props)
    return this.props.allBooks.map( (book, index) =>
      <IndividualBook
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
