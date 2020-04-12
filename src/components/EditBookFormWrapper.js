import React from 'react'
import NewBookForm from './NewBookForm.js'
import {updateBook} from '../actions/books'
import {setFormDataForEdit} from '../actions/newBookForm'
import {connect} from 'react-redux'


class EditBookFormWrapper extends React.Component {
    
    componentDidMount() {
       this.props.book && this.props.setFormDataForEdit(this.props.book)
    }
    
    // = ({ history, updateBook}) =>
    handleSubmit = (formData, userId) => {
        const { updateBook, book, history } = this.props 
        updateBook({
            ...formData,
            bookId: book.id,
            userId
        }, history)
    } 
    
    render() {
        const {history, handleSubmit} = this.props
    return <NewBookForm editMode history={history} handleSubmit={handleSubmit} />  
  } 
}

export default connect(null, {updateBook, setFormDataForEdit})(EditBookFormWrapper);
