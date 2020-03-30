import React from 'react'
import { updateNewBookForm } from '../actions/newBookForm'
import { createBook } from '../actions/books'
import {connect} from 'react-redux'

//presentational component

const NewBookForm = ({formData, updateNewBookForm, createBook, userId}) => {
const {title, description, award} = formData
    
    const handleChange = event => {
       const {name, value} = event.target
       updateNewBookForm(name, value)
    }

      const handleSubmit = event => {
         event.preventDefault()
          createBook({
              ...formData,
              userId
            })
      }

   return(
              
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={title}
            />

            <input
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={description}
            />

            <input
            placeholder="Award"
            name="award"
            onChange={handleChange}
            value={award}
            />
          <input type="submit" value="Create Book"/>
        </form>
   )}

const mapStateToProps = state => {  
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
    formData: state.newBookForm,
    userId
  }
}

export default connect(mapStateToProps, {updateNewBookForm, createBook})(NewBookForm)