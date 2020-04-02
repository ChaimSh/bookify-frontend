import React from 'react'

//presentational component

const BookCard = ({ book }) => {

    return (
        book ?
    <div>  
        {console.log("Hey im in /components/Bookcard.js",book)}
    <h3> {book.title} </h3>
         <b>Description:</b> {book.description}<br/>
         <b>Award:</b> {book.award}
    </div> :
    <p>No book Here!</p>
    )
}

export default BookCard