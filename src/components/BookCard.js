import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const BookCard = ({ book }) => {

console.log(book)

  return (
        book ?
    <div>  
        {console.log("Hey im in /components/Bookcard.js",book)}
    <h3> {book.title} </h3>
         <b>Description:</b> {book.description}<br/>
         <b>Award:</b> {book.award}<br/>
         <Link to={`/books/${book.id}/edit`}>Edit This Book</Link>
    </div> 
    :
    <p>No book Here!</p>
    )
   }

export default BookCard