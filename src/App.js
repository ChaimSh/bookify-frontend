import React from 'react';
import './App.css';
import Login from './components/Login.js'
// import Logout from './components/Logout.js'
import NavBar from './components/NavBar.js'
import Books from './components/Books.js'
import Home from './components/Home.js'
import BookCard from './components/BookCard.js'
import NewBookForm from './components/NewBookForm.js'
import EditBookFormWrapper from './components/EditBookFormWrapper.js'
import NewBookFormWrapper from './components/NewBookFormWrapper.js'
import Signup from './components/Signup.js'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
// import MainContainer from './components/MainContainer';
import { Route, Switch, withRouter } from 'react-router-dom'



class App extends React.Component {
  
  componentDidMount() {
     this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, books } = this.props
  return (
      <div className="App"> 
      { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }   
       <Switch>
         <Route exact path='/signup' render={({history})=><Signup history={history} />} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/books' component={Books} />
         <Route exact path='/books/new' component={NewBookFormWrapper} />
         {console.log("see my books:", books)}
         <Route exact path='/books/:id' render={props => {
          //  console.log("see my books:", books)
           const book = books.find(book => book.id === props.match.params.id)
           //console.log(book)
           return <BookCard book={book} {...props}/>
          }
        } />

          <Route exact path='/books/:id/edit' render={props=> {
            const book = books.find(book => book.id === props.match.params.id)
            return <EditBookFormWrapper book={book} {...props}/>
            }
          }/>
     </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser, 
    books: state.books
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));