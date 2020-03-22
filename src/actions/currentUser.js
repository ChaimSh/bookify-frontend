//synchronous action creators
export const setCurrentuser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//asynchrnonous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000")
    }
}