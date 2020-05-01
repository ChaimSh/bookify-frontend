import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Liking from './Liking.js'

//parent container

const Books = props => {
    
const bookCards = props.books.map(b => (<p key={b.id} book={b} ><Link to={`/books/${b.id}`}><b>{b.title}</b></Link>
<br/>
<b>Description:</b> {b.description}
<br/>
<b>Award:</b> {b.award}
<br/>
  {/* <Liking/> */}
<br/>
</p>)) 
    // <p key={b.id}>                   </p>
    // props.books.length > 0 ? props.books.map(b => (<p key={b.id}><Link to={`/books/${b.id}`}>{b.name}</Link></p>)) : "NO books here"
    // const bookTitles = props.books.map(b => (<Link to={"/orangepeels"}>{b.title}</Link>))
    return (bookCards)
}

const mapStateToProps = state => {
  return {
      books: state.books
  }
}

export default connect(mapStateToProps)(Books)