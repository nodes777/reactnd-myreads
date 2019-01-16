import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'


class BookDetails extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array, //some books don't have authors
    imageURL: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { title, authors, imageURL, updateBookShelf, book} = this.props
    console.log(authors)
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img alt={`${title}'s cover`} className="book-cover" src={imageURL}/>
            <BookShelfChanger updateBookShelf={updateBookShelf} book={book} />
          </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{ authors !== undefined && authors.map((author) => author)}</div>
        </div>
      </li>
    )
  }
}

export default BookDetails