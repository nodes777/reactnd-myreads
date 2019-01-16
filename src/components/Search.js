import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookList from './BookList'

class Search extends React.Component {
  static propTypes = {
    searchBooks: PropTypes.array.isRequired,
    searchQuery: PropTypes.func.isRequired
  } 

  updateQuery(query){
    this.setState({
      query: query.trim()
    })
  }

  state = {
    query:''
  }

  render() {
    const {searchQuery, searchBooks, updateBookShelf} = this.props;
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" ><Link to="/" style={{display: 'block', height: '100%'}} />Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" 
                aria-label="Search by title or author"
                value={this.state.query} 
                placeholder="Search by title or author"
                onChange={(e) => this.updateQuery(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
               <BookList bookShelfTitle={'Search Results'} bookList={searchBooks} updateBookShelf={updateBookShelf}/>
            </div>
          </div>
    )
  }
}

export default Search