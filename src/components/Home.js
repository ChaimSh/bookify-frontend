import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => (
    <div className="homepage">
      <span>
         <p>Welcome To Bookify. Please</p>
        <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
      </span>
    </div>
  
  );

export default Home