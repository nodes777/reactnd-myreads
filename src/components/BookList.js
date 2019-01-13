import React from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'


class BookList extends React.Component {
  static propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    bookList: PropTypes.array.isRequired,
  }

  render() {
    const { bookShelfTitle, bookList } = this.props
    console.log(bookList)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfTitle}</h2>
          <ol className="books-grid">
          {bookList.map((book) => {
            return (
              <BookDetails 
                title={book.title}
                authors={book.authors}
                imageURL={book.imageLinks.thumbnail}
              />
            )
          })}
          </ol>
      </div>
    )
  }
}

export default BookList