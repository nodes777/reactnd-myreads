import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class Home extends React.Component {
  static propTypes = {
    appBooks: PropTypes.object.isRequired,
  }

  render() {
    const { appBooks } = this.props;
    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookList bookShelfTitle={'Currently Reading'} bookList={appBooks.allBooks}/>
            {/*<BookList bookShelfTitle={'Want To Read'}/>
            <BookList bookShelfTitle={'Read'}/>*/}
          </div>
      </div>    
    )
  }
}

export default Home