import React, {Component} from 'react'

import ShelfPicker, {ShelfOptions} from './ShelfPicker'


class Book extends Component {

    onShelfChanged = (shelfName) => {
        this.props.onShelfChanged(this.props.book, shelfName)
    }

    render() {
        let {shelf, authors, imageLinks, title} = this.props.book
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks && imageLinks.thumbnail}")` }}></div>
                <div className="book-shelf-changer">
                    <ShelfPicker
                        selectedOption={ shelf && ShelfOptions.enumValueOf(shelf)}
                        onShelfChanged={this.onShelfChanged}
                        />
                </div>
              </div>
              <div className="book-title">{title}</div>
              {authors && authors.map((author) =>
                  <div
                      key={author}
                      className="book-authors">
                      {author}
                  </div> )}
            </div>
        )
    }
}

export default Book
