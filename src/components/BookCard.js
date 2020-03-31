import React from 'react'

//presentational component

const BookCard = ({ book }) => {

    return (
    <div>  
    <h3> {book.title} </h3>
         {book.description}
    </div>
    )
}

export default BookCard