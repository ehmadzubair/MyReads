import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {groupBy} from 'lodash'
import * as BooksAPI from '../BooksAPI'

import Bookshelf from './Bookshelf'

class MyBooks extends Component {

    state = {
        'currentlyReading': [],
        'wantToRead': [],
        'read': []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            let {currentlyReading, wantToRead, read} = groupBy(books, (book) => (book.shelf))

            this.setState({
                currentlyReading,
                wantToRead,
                read
            })
        }
        )
    }


    render() {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf title='Currently Reading' books={this.state.currentlyReading}/>
                  <Bookshelf title='Want To Read' books={this.state.wantToRead}/>
                  <Bookshelf title='Read' books={this.state.read}/>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search' >Add a book</Link>
              </div>
            </div>
        )
    }
}

export default MyBooks
