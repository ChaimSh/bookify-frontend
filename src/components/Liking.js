import React from 'react'

class Liking extends React.Component {

  constructor(){
      super()
       this.state = {
          toggle: false
      }
    }

 clickHandler = () => {
   this.setState((prevState) => {
    return {   
        toggle: !prevState.toggle
      }
    }
   )
 }

render(){
  return(   
     <button onClick={this.clickHandler}> 

     </button>
  )
}

}
export default Liking 