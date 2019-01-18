import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import  Home  from './components/Home'
import  Search  from './components/Search'

import './App.css'

const isUndefined = (x) => x === undefined;

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    searchBooks: [],
    none: [],
    query: '',
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const currReadingBooks = books.filter(book => {
          return book.shelf === 'currentlyReading'
        })
      const wantToReadBooks = books.filter(book => {
          return book.shelf === 'wantToRead'
        })
      const readBooks = books.filter(book => {
          return book.shelf === 'read'
        })
      this.setState((prevState, props) => {
          return {
            currentlyReading: currReadingBooks,
            wantToRead: wantToReadBooks,
            read: readBooks,
            allBooks: books,
          };
      })
    })
  }

  updateBookShelf(book, newShelf) {
    //keep a reference of the old shelf so you know where to remove book
    const oldShelf = book.shelf || 'none'
    BooksAPI.update(book, newShelf)
    .then((idObj) => {
      this.setState(prevState => {
        // API now has new shelf set
        book.shelf = newShelf
        const newState = {
          [oldShelf]: prevState[oldShelf].filter((bookInShelf) => bookInShelf.id !== book.id  ),
          [newShelf]: prevState[newShelf].concat([ book ])
        } 
        return newState;
      })
    })
  }

  search(query) {
    this.setState({
      query: query
    })
    const trimmedQuery = query.trim()
    BooksAPI.search(trimmedQuery)
    .then((searchArray) => {
      if( searchArray === undefined ||  searchArray.error) {
        searchArray = []
      }
      const searchArrayWithShelves = searchArray.map((book) => {
        const stateBook = this.state.allBooks.forEach((stateBook) => {
          if(stateBook.id === book.id){
            book.shelf = stateBook.shelf
          }
        })
        return book;
      })
      this.setState({ 
        searchBooks: searchArrayWithShelves
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home
            appBooks={this.state}
            updateBookShelf={(bookid, shelf) => {this.updateBookShelf(bookid, shelf)}}
          />
        )}/>
        <Route path='/search' render={() =>(
          <Search
            searchBooks={this.state.searchBooks}
            searchQuery={(query) => {this.search(query)}}
            updateBookShelf={(bookid, shelf) => {this.updateBookShelf(bookid, shelf)}}
            query={this.state.query}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
