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
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            }, 
            body: JSON.stringify(credentials)
        })
        .then(response = response.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentuser(user))
            }
        })
        .catch(console.log)
    }
}


export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            method: "GET",
            headers: {
               "Content-Type": "application/json"
            }
        })
        .then(response = response.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentuser(user))
            }
        })
        .catch(console.log)
    }
}