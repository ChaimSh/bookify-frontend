import React from 'react'

//presentational component

const BookCard = ({ book }) => {

    return (
    <p> {book.attributes.title} </p>
    )
}

export default BookCard