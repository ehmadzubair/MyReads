import React from 'react'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import MyBooks from './components/MyBooks'

import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <Route exact path="/" component={MyBooks} />
          <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
