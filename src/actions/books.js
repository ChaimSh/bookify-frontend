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


// asynchronous actions

export const getBooks = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/books", {
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
                dispatch(setBooks(response.data))
            }
        })
        .catch(console.log)
    } 
}

export const createBook = bookData => {
  return dispatch => {
      return fetch("http://localhost:3001/books", {
          method: "POST", 
      })
  } 
}