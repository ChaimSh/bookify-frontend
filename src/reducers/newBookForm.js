const initialState = {
    title: "",
    description: "",
    award: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_BOOK_FORM":
            return {
                ...state, 
                [action.FormData.name]: action.FormData.value
            }
        case "RESET_NEW_BOOK_FORM":
            return initialState
     default:
         return state
    }
}