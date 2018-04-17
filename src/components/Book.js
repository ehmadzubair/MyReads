import React, {Component} from 'react'

import ShelfPicker, {ShelfOptions} from './ShelfPicker'


class Book extends Component {
    render() {
        let {shelfString, authors, thumbnail, title} = this.props
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
                <div className="book-shelf-changer">
                    <ShelfPicker selectedOption={ shelfString && ShelfOptions.enumValueOf(shelfString)}/>
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
