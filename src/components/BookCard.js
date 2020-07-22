import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './BookCard.css'

const BookCard = ({ book }) => {

console.log(book)

  return (
        book ?
    <div className="card">  
        {console.log("Hey im in /components/Bookcard.js",book)} 
    <div className="container">
    <h3> {book.title} </h3>
     <br/>
        {/* <button>Upload Image</button> */}
    <br/>
        <h4> <b>Description:</b> {book.description}<br/> </h4>
        <h4>  <b>Award:</b> {book.award}<br/> </h4>
             <Link to={`/books/${book.id}/edit`}>
               <button type="button"><h5>Edit This Book</h5></button>
             </Link> 

    </div>
    </div> 
    :
    <p>No book Here!</p>
    )
   }

export default BookCard