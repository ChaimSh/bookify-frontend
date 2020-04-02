import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//parent container

const Books = props => {
    
    const bookCards = props.books.length > 0 ? props.books.map(b => (<p key={b.id}><Link to={`/books/${b.id}`}>{b.name}</Link></p>)) : null
    return (bookCards )
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