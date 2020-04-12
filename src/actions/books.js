import {resetNewBookForm} from './newBookForm'

//synchronous actions

export const setBooks = books => {
    return {
        type: "SET_BOOKS",
        books
    }
}

export const clearBooks = () => {
    return {
        type: "CLEAR_BOOKS"
    }
}

export const addBook = book => {
    return {
        type: "ADD_BOOK",
        book
    }
}


export const updateBookSuccess = book => {
    return {
        type: "UPDATE_BOOK",
        book
    }
}

// asynchronous actions

export const getBooks = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/books", {
            credentials: "include",
            method: "GET",
            headers: {
               "Content-Type": "application/json"
            }
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setBooks(response))
            }
        })
        .catch(console.log)
    } 
}

export const createBook = (bookData, history) => {
  return dispatch => {
      const sendableData = {
          title: bookData.title,
          description: bookData.description,
          award: bookData.award,
          user_id: bookData.userId
      }
      return fetch("http://localhost:3001/api/v1/books", {
      credentials: 'include',    
      method: "POST", 
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(sendableData)
      })
      .then(r => r.json())
      .then(resp => {
          if (resp.error) {
              alert(resp.error)
          } else {
             console.log("YOU ARE HITTING createBook IN BOOKS.JS", resp)
              dispatch(addBook(resp))
              dispatch(resetNewBookForm())
              history.push(`/books/${resp.id}`)
          }
      })
      .catch(console.log)
  } 
}

export const updateBook = (bookData, history) => {
    return dispatch => {
        const sendableData = {
            title: bookData.title,
            description: bookData.description,
            award: bookData.award,
            user_id: bookData.userId
        }
        return fetch(`http://localhost:3001/api/v1/books/${bookData.bookId}`, {
        credentials: 'include',    
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(sendableData)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
               console.log("YOU ARE HITTING createBook IN BOOKS.JS", resp)
                dispatch(updateBookSuccess(resp))
                dispatch(resetNewBookForm())
                history.push(`/books/${resp.id}`)
            }
        })
        .catch(console.log)
    } 
  }