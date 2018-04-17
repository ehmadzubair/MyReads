import React, {Component} from 'react'

import ShelfPicker, {ShelfOptions} from './ShelfPicker'


class Book extends Component {
    render() {
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.thumbnail}")` }}></div>
                <div className="book-shelf-changer">
                    <ShelfPicker selectedOption= {ShelfOptions.enumValueOf(this.props.shelfString)}/>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              {this.props.authors.map((author) =>
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
