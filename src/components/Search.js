import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {search} from '../BooksAPI'
import Book from './Book'
import * as _ from 'lodash'

class Search extends Component {

    state = {
        searchValue: '',
        searchResults : []
    }

    handleChange(event) {
        let searchValue = event.target.value
        this.setState({searchValue})

        if (this.state.searchValue.length === 0) {
            this.setState({
                searchResults : []
            })
        }
        else if (this.state.searchValue.length >= 2) {
            search(this.state.searchValue).then((searchResults) =>
            this.setState({
                searchResults: searchResults.error ? [] : searchResults
            })
            )
        }

    }

    addShelfIfExists = (book) => {

        let {currentlyReadingIDs, wantToReadIDs, readIDs} = this.props
        book.shelf = 'none'
        if (_.includes(currentlyReadingIDs, book.id)) {
            book.shelf = 'currentlyReading'
        }
        else if (_.includes(wantToReadIDs, book.id)) {
            book.shelf = 'wantToRead'
        }
        else if (_.includes(readIDs, book.id)) {
            book.shelf = 'read'
        }
        return book
    }

    render() {
        let {searchResults} = this.state
        debugger;
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/"> Close </Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.searchValue}
                    onChange={(event) => this.handleChange(event)}
                />
              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                { searchResults.length !== 0 && searchResults.map((book) => {
                    return (
                        <li key={book.id}>
                            <Book
                                book={this.addShelfIfExists(book)}
                                onShelfChanged={this.props.onShelfChanged}
                            />
                        </li>
                    )
                }) }
                </ol>
            </div>
          </div>
        )
    }
}


export default Search
