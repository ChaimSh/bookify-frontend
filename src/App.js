import React from 'react';
import './App.css';
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'

class App extends React.Component {
  
  componentDidMount() {
     this.props.getCurrentUser()
  }

  render() {
  return (
      <NavBar />
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
