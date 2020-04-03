import React from 'react'
import {createBook} from '../actions/books'
import {connect} from 'react-redux'
import NewBookForm from './NewBookForm.js'


const NewBookFormWrapper = ({ history, createBook}) => {
   
    const handleSubmit = (formData, userId) => {
        createBook({
            ...formData, 
            userId
        }, history)
    }
    return <NewBookForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, {createBook})(NewBookFormWrapper);
