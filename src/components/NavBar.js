import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import './NavBar.css';


const NavBar = ({currentUser, loggedIn}) => {

    return (
    <div className="NavBar">
       <div className="Navlink">
       <NavLink exact activeClassName="active" to="/books"  ><h3>View Books</h3></NavLink>   
       </div>
       <div className="Navlink">
       <NavLink exact activeClassName="active" to="/books/new" ><h3>New Book</h3></NavLink>
       </div>
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