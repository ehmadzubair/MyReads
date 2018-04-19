import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Bookshelf from './Bookshelf'

class MyBooks extends Component {


    render() {
        let {currentlyReading, wantToRead, read, onShelfChanged} = this.props

        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf title='Currently Reading' books={currentlyReading} onShelfChanged={onShelfChanged}/>
                  <Bookshelf title='Want To Read' books={wantToRead} onShelfChanged={onShelfChanged}/>
                  <Bookshelf title='Read' books={read} onShelfChanged={onShelfChanged}/>
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
