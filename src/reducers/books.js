export default (state = [], action) => {
    switch (action.type) {
      case "SET_BOOKS":
         return action.books
      case "ADD_BOOK":
          return state.concat(action.book)
      case "UPDATE_BOOK":
          return state.map(book => book.id === action.book.id ? action.book : book)
      case "CLEAR_BOOKS":
          return []
     default:
         return state
    }
}

