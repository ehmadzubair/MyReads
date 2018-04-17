import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

class Bookshelf extends Component {

    render() {
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title"> {this.props.title} </h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    this.props.books.map((book) =>
                    (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onShelfChanged={this.props.onShelfChanged}
                            />
                        </li>
                    ))
                }
                </ol>
              </div>
            </div>
        )
    }
}

Bookshelf.propTypes = {
    title: PropTypes.string,
    books: PropTypes.array
}

export default Bookshelf
