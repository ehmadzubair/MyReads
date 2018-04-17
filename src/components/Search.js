import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {search} from '../BooksAPI'
import Book from './Book'

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

    render() {
        let {searchResults} = this.state
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
                { searchResults.length !== 0 && searchResults.map((book) =>
                    (
                        <li key={book.industryIdentifiers[0].identifier}>
                            <Book
                                title={book.title}
                                authors={book.authors}
                                thumbnail={book.imageLinks.thumbnail}
                            />
                        </li>
                    )) }
                </ol>
            </div>
          </div>
        )
    }
}


export default Search
