import { resetLoginForm } from "./loginForm.js"
import { getBooks, clearBooks } from "./books.js"
import { resetSignupForm } from "./signupForm"


//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//asynchrnonous action creators

export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3001/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response))
            dispatch(getBooks())
            dispatch(resetSignupForm())
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }




export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            }, 
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
                dispatch(getBooks())
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearBooks())
       return fetch("http://localhost:3001/api/v1/logout", {
           credentials: "include",
           method: "DELETE"
       })     
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
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
                console.log("Happy PURIM!")
                dispatch(setCurrentUser(response))
                dispatch(getBooks())
            }
        })
        .catch(console.log)
    }
}