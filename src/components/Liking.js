import React from 'react'

class Liking extends React.Component {

  constructor(){
      super()
       this.state = {
          toggle: false
      }
    }

 clickHandler = () => {
   this.setState(prevState => {
    return {   
        toggle: !prevState.toggle
      }
    })
  }

render(){
  return(   
    <div>  
     <button onClick={this.clickHandler}> 
         {this.state.toggle ? "Liked" : "Not Liked Yet"} 
     </button>
      
    </div>
  )
}

}
export default Liking 