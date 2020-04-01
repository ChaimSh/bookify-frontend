import React from 'react'

//presentational component

const BookCard = ({ book }) => {

    return (
    <div>  
        {console.log("Hey im in /components/Bookcard.js",book)}
    <h3> {book.title} </h3>
         <b>Description:</b> {book.description}<br/>
         <b>Award:</b> {book.award}
    </div>
    )
}

export default BookCard