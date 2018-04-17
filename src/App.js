import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import MyBooks from './components/MyBooks'

import {groupBy} from 'lodash'

import './App.css'

class BooksApp extends React.Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
        allBooks: []
    }

    componentDidMount() {
        this.fetchBooksFromAPI()
    }

    fetchBooksFromAPI = () => {
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

    onShelfChanged = (book, shelfName) => {
        BooksAPI.update(book, shelfName).then(
            this.fetchBooksFromAPI()
        )
    }

    render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => (<MyBooks books={this.state} onShelfChanged={this.onShelfChanged} />)} />
          <Route path="/search" render={() => (<Search books={this.state} onShelfChanged={this.onShelfChanged} />)} />
      </div>
        )
    }
}

export default BooksApp
