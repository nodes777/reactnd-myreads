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
          return book.shelf == 'currentlyReading'
        })
      let wantToReadBooks = books.filter(book => {
          return book.shelf == 'wantToRead'
        })
      let readBooks = books.filter(book => {
          return book.shelf == 'read'
        })
      this.setState((prevState, props) => {
          return {
            currentlyReading: currReadingBooks,
            wantToRead: wantToReadBooks,
            read: readBooks
          };
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
          />
        )}/>
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
