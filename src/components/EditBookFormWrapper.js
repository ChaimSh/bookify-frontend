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
        console.log(this.props)
        updateBook({
            ...formData,
            bookId: this.props.match.params.id, 
            // book.id,
            userId
        }, history)
    } 
    
    render() {
    const {history, book} = this.props
    const bookId = book ? book.id : null
    return <NewBookForm editMode handleSubmit={this.handleSubmit} />  
  } 
}

export default connect(null, {updateBook, setFormDataForEdit})(EditBookFormWrapper);
