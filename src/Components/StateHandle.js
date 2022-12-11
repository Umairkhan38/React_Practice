import React from 'react';
import Navbar from './Navbar'

export default class StateHandle extends React.Component{

constructor(){
    super();
    this.state={
        status:"This is State in Class Component"
    }
//   this.stateHandler=this.stateHandler.bind(this)  
}

stateHandler(){
    this.setState({
        status:"The State is Reset "
    })

}


render(){

return(
<React.Fragment>
<Navbar />
<h2>{this.state.status}</h2>
<button onClick={()=>{this.stateHandler()}}>Handler</button>
</React.Fragment>

)
}


}








