import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  static propTypes = {
    appBooks: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { appBooks, updateBookShelf } = this.props;
    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
            <Link className="link" to="/search">Search</Link>
          </div>
          <div className="list-books-content">
            <BookList bookShelfTitle={'Currently Reading'} bookList={appBooks.currentlyReading} updateBookShelf={updateBookShelf}/>
            <BookList bookShelfTitle={'Want To Read'} bookList={appBooks.wantToRead} updateBookShelf={updateBookShelf}/>
            <BookList bookShelfTitle={'Read'} bookList={appBooks.read} updateBookShelf={updateBookShelf}/>
          </div>
      </div>    
    )
  }
}

export default Home