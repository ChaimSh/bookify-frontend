import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'


const NavBar = ({currentUser}) => {

    return (
    <div className="NavBar">
      {currentUser ? "Welcome, ${currentUser.name}": ""}
      {currentUser ? <Logout /> : <Login /> }
      

    </div>      
  )
}

const mapStateToProps = () => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps)(NavBar)