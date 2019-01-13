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
      this.setState((prevState, props) => {
          return {allBooks: books};
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
