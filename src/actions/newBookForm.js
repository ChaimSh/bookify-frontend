export const updateNewBookForm = (name, value) => {
    return {
        type: "UPDATE_NEW_BOOK_FORM",
        formData: {name, value}
    }
}

export const resetNewBookForm = () => {
    return {
        type: "RESET_NEW_BOOK_FORM"
    }
}

export const setFormDataForEdit = book => {
  const bookFormData = {
      title: book.title,
      description: book.description,
      award: book.award
  }
  return {
      type: "SET_FORM_DATA_FOR_EDIT",
      bookFormData
  }
} 