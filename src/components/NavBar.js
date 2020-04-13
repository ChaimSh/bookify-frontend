import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'



const NavBar = ({currentUser, loggedIn}) => {

    return (
    <div className="NavBar">
       <NavLink exact activeClassName="active" to="/books"  >View Books</NavLink>
       <NavLink exact activeClassName="active" to="/books/new" >New Book</NavLink>
      { loggedIn ? <><p id="loggedin">Welcome {currentUser.name}. </p><Logout/></> : null}
      
    </div>      
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}


export default connect(mapStateToProps)(NavBar)