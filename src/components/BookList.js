import React from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'


const BookList = ({ bookShelfTitle, bookList, updateBookShelf }) => (
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
                imageURL={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "http://via.placeholder.com/128x193?text=No%20Cover"}
                updateBookShelf={updateBookShelf}
                book={book}
              />
            )
          })}
          </ol>
      </div>
)

BookList.propTypes = {
  bookShelfTitle: PropTypes.string.isRequired,
  bookList: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default BookList;