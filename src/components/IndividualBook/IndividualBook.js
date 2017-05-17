import React from 'react'

export default class IndividualBook extends React.Component{
  constructor(props) {
    super(props)
  }


  renderBookSection() {
    const { title, image_url, description, isbn, author_name } = this.props
    return( <td>
      <div>
        {title}
      </div>
    </td> )
  }


  render(){
    return( <tr>{this.renderBookSection()}</tr> )
  }


}

// title={title} image_url={image_url} description={description} isbn={isbn} author_name={author_name}
