import React from 'react'
import BookCard from './BookCard'
import {connect} from 'react-redux'


//parent container

const Books = props => {
    const bookCards = props.books.length > 0 ? props.books.map(b => <BookCard book={b} key={b.id}/>) : null
    return (
       bookCards
    )
}
// get array of books from state
//when use mapStateToProps = we need to see if this 
//component needs to see any part of state (users, currentUser, loginForm, books) or any piece of them.
// so mapStateToProps get us access to state inorder to 
//pick pieces of it and make them available to this component AS PROPS

const mapStateToProps = state => {
  return {
      books: state.books
  }
}

export default connect(mapStateToProps)(Books)