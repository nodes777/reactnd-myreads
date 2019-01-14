import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import  Home  from './components/Home'
import  Search  from './components/Search'

import './App.css'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      let currReadingBooks = books.filter(book => {
          return book.shelf === 'currentlyReading'
        })
      let wantToReadBooks = books.filter(book => {
          return book.shelf === 'wantToRead'
        })
      let readBooks = books.filter(book => {
          return book.shelf === 'read'
        })
      this.setState((prevState, props) => {
          return {
            currentlyReading: currReadingBooks,
            wantToRead: wantToReadBooks,
            read: readBooks,
            allBooks: books
          };
      })
    })
  }

  updateBookShelf(book, newShelf) {
    //keep a reference of the old shelf so you know where to remove book
    let oldShelf = book.shelf
    BooksAPI.update(book, newShelf)
    .then((idObj) => {
      this.setState(prevState => {
        // API now has new shelf set
        book.shelf = newShelf
        let newState = {
          [oldShelf]: prevState[oldShelf].filter((bookInShelf) => bookInShelf.id !== book.id  ),
          [newShelf]: prevState[newShelf].concat([ book ])
        } 
        return newState;
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home
            appBooks={this.state}
            updateBookShelf={(bookid, shelf) => {this.updateBookShelf(bookid, shelf)}}
          />
        )}/>
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
