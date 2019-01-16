import React from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'


class BookList extends React.Component {
  static propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    bookList: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { bookShelfTitle, bookList, updateBookShelf } = this.props
    console.log(bookList)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfTitle}</h2>
          <ol className="books-grid">
          {bookList.map((book) => {
            return (
              <BookDetails 
                key={book.id}
                id={book.id}
                title={book.title}
                authors={book.authors}
                imageURL={book.imageLinks.thumbnail}
                updateBookShelf={updateBookShelf}
                book={book}
              />
            )
          })}
          </ol>
      </div>
    )
  }
}

export default BookList