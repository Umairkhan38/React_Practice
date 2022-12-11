import React from "react";


class Properties extends React.Component{

constructor(){
    super();
    this.eventHandle=this.eventHandle.bind(this)
}


eventHandle(){
    console.log("You Have Added to Cart ");
    console.log(this)
}


render(){
    // accessing the props in the class component 
return(    

    <div>
        <h1>This is Under Props</h1>
        <h2>{this.props.name}</h2>  
        <h2>{this.props.msg}</h2>
        <button onClick={()=>this.eventHandle()}>add to cart</button>

    </div>

   )
}
}


export default Properties;

