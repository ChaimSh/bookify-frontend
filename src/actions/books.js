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
              dispatch(addBook(resp.data))
          }
      })
      .catch(console.log)
  } 
}