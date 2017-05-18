import React from 'react'
import { Link }  from 'react-router-dom';

export default class IndividualBook extends React.Component{
  constructor(props) {
    super(props)
  }


  renderBookSection() {
    const { id, title, image_url, description, isbn, author_name } = this.props
    return( <td>
      <div>
        <Link to={"/details/"+id}>{title}</Link>
      </div>
    </td> )
  }


  render(){
    return( <tr>{this.renderBookSection()}</tr> )
  }


}

// title={title} image_url={image_url} description={description} isbn={isbn} author_name={author_name}
