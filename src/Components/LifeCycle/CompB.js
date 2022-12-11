import React from 'react';


class CompB extends React.Component{

    constructor(props){
        super(props);
        this.state={
            profession:"Software Engineer"
        }
        console.log("The Constructor from CompB")
    }


static getDerivedFromPropos(props,state){
    console.log("This is a getDerivedFromProps from CompB")       
    
}


componentDidMount(){
    console.log("This is componentDidMount From component B");
}

render(){
    return(
        <div>
            <h2>Component B</h2>
        </div>
    )
}

}

export default CompB;