import React from 'react'
import { updateNewBookForm } from '../actions/newBookForm'
import {connect} from 'react-redux'


const NewBookForm = ({formData, updateNewBookForm, userId, book, handleSubmit, editMode}) => {
const {title, description, award} = formData
    
    const handleChange = event => {
       const {name, value} = event.target
       updateNewBookForm(name, value)
    }

     return( 
       <div className="newBookForm"> 
       <h1>{editMode ? "Update Book": "Create Book"}</h1>            
        <form onSubmit={event => {
          event.preventDefault()
          handleSubmit(formData, userId)
        }}>
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
          <input type="submit" value={editMode ? "Update Book": "Create Book"}/>
        </form>
        </div>
     )}

    const mapStateToProps = state => {  
        const userId = state.currentUser ? state.currentUser.id : ""
        return {
        formData: state.newBookForm,
        userId
      }
 }

export default connect(mapStateToProps, {updateNewBookForm})(NewBookForm)