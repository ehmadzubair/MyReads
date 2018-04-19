import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import MyBooks from './components/MyBooks'
import * as _ from 'lodash'

import {groupBy} from 'lodash'

import './App.css'

class BooksApp extends React.Component {
    state={
        currentlyReading: [],
        wantToRead: [],
        read: [],
        allBooks: []
    }

    componentDidMount() {
        this.fetchBooksFromAPI()
    }

    getBookFromID=(bookId)=>  _.find(this.state.allBooks, (book)=> book.id===bookId)

    fetchBooksFromAPI=()=> {
        BooksAPI.getAll().then((books)=> {
            let {currentlyReading, wantToRead, read}=groupBy(books, (book)=> (book.shelf))

            this.setState({
                currentlyReading: currentlyReading.map((book)=> book.id),
                wantToRead: wantToRead.map((book)=> book.id),
                read: read.map((book)=> book.id),
                allBooks: books
            })
        }
        )
    }

    onShelfChanged=(book, shelfName)=> {
        const {allBooks}=this.state
        BooksAPI.update(book, shelfName).then(({currentlyReading, wantToRead, read})=>
            this.setState({
                currentlyReading,
                wantToRead,
                read,
                allBooks: allBooks.map((item)=> {
                    if (item.id===book.id) {
                        item.shelf=shelfName
                    }
                    return item
                })
            })
        )
    }

    render() {
        let {currentlyReading, wantToRead, read}=this.state
    return (
      <div className="app">
          <Route exact path="/" render={()=> {
              return (
                  <MyBooks
                  currentlyReading={this.state.currentlyReading.map((bookId)=> this.getBookFromID(bookId))}
                  wantToRead={this.state.wantToRead.map((bookId)=> this.getBookFromID(bookId))}
                  read={this.state.read.map((bookId)=> this.getBookFromID(bookId))}
                  onShelfChanged={this.onShelfChanged}
                  />
              )
          }

          } />
          <Route path="/search" render={()=> {
              return (
                  <Search
                  currentlyReadingIDs={currentlyReading}
                  wantToReadIDs={wantToRead}
                  readIDs={read}
                  onShelfChanged={this.onShelfChanged} />
              )} }/>
          }

      </div>
        )
    }
}

export default BooksApp
