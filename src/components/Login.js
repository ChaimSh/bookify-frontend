import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'


const Login = ({loginFormData, updateLoginForm, login, history}) => {


   const handleInputChange = event => {
       const { name, value } = event.target
       const updatedFormInfo = {
           ...loginFormData, 
           [name]: value
        }
        updateLoginForm(updatedFormInfo)
   }


   const handleSubmit = event => {
       event.preventDefault()
       console.log("a")
       login(loginFormData, history)
       console.log("b")
   }

    return (
      <form onSubmit={handleSubmit}>
      <input placeholder="Username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="Password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
        <input type="submit" value="Log In" />
      </form>
    )
}

const mapStateToProps = state => {
   return {
       loginFormData: state.loginForm
   } 
}

export default connect(mapStateToProps, {updateLoginForm, login} )(Login)