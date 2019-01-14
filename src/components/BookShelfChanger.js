import React from 'react'
import PropTypes from 'prop-types'
import '../css/expandable.css'
//import expandButton from '../utils/expandableScript'

class BookShelfChanger extends React.Component {
  static propTypes = {
   updateBookShelf:PropTypes.func.isRequired,
   book: PropTypes.object.isRequired
  }

  expandButton(){
      this.setState((prevState) => {
      return {
        expanded: !prevState.expanded
      }
    })
  }

  state = {
    expanded: false
  }

  render() {
    let btn_class = this.state.expanded ? "contentShow" : "contentHidden";

    const {updateBookShelf, book} = this.props
    return (
      <div className="book-details">
		  <button onClick={() => this.expandButton()} aria-expanded={this.state.expanded} className="book-shelf-changer collapsible"></button>
        <div className={btn_class}>
            <div>Move to...</div>
            <button onClick={(e) => updateBookShelf( book, e.target.value)} value="currentlyReading">Currently Reading</button>
            <button onClick={(e) => updateBookShelf( book, e.target.value)} value="wantToRead">Want to Read</button>
            <button onClick={(e) => updateBookShelf( book, e.target.value)} value="read">Read</button>
            <button onClick={() => this.expandButton()}>Close</button>
        </div>
      </div>
    )
  }
}

export default BookShelfChanger

