import React from 'react'
import NewBookForm from './NewBookForm.js'
import {updateBook, deleteBook} from '../actions/books'
import {setFormDataForEdit, resetNewBookForm} from '../actions/newBookForm'
import {connect} from 'react-redux'


class EditBookFormWrapper extends React.Component {
    
    componentDidMount() {
       this.props.book && this.props.setFormDataForEdit(this.props.book)
    }

    componentDidUpdate(prevProps) {
        this.props.book && !prevProps.book && this.props.setFormDataForEdit(this.props.book)
      }
    
      componentWillUnmount() {
        this.props.resetNewBookForm()
      }
    
    // = ({ history, updateBook}) =>
    handleSubmit = (formData) => {
        const { updateBook, book, history } = this.props 
        console.log(this.props)
        updateBook({
            ...formData,
            bookId: this.props.match.params.id 
            // book.id,
        }, history)
    } 
    
    render() {
    const {history, book, deleteBook} = this.props
    const bookId = book ? book.id : null
    
    return <>
           <NewBookForm editMode handleSubmit={this.handleSubmit} />  
           <br/>
           <button style={{color: "red"}} onClick={()=>deleteBook(bookId, history)}>Delete This Book</button>
          </>
  } 
}

export default connect(null, {updateBook, setFormDataForEdit, resetNewBookForm, deleteBook})(EditBookFormWrapper);
