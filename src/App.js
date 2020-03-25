import React from 'react';
import './App.css';
import Login from './components/Login.js'
// import Logout from './components/Logout.js'
import NavBar from './components/NavBar.js'
import Books from './components/Books.js'
import Signup from './components/Signup.js'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import MainContainer from './components/MainContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount() {
     this.props.getCurrentUser()
  }

  render() {
  return (
    <Router>
      <div className="App">    
      <NavBar />
      <Route exact path='/signup' component={Signup} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/books' component={Books} />
     
      </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
