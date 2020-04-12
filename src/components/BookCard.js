import React from 'react'
import {Link} from 'react-router-dom'
//presentational component

const BookCard = ({ book }) => {

    return (
        book ?
    <div>  
        {console.log("Hey im in /components/Bookcard.js",book)}
    <h3> {book.title} </h3>
         <b>Description:</b> {book.description}<br/>
         <b>Award:</b> {book.award}
         <Link to={`/books/${book.id}/edit`}>Edit this book</Link>
    </div> 
    :
    <p>No book Here!</p>
    )
}

export default BookCard