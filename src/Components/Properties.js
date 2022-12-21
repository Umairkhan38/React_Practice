import React from "react";
import {myContext} from './StateHandle.js'


class Properties extends React.Component{


render(){
    // accessing the props in the class component 
return(    

    <div>
    <br />
    <hr />
    <div>Properties.js</div>
    <hr />
        <h2>This is Under Context Consumer</h2>
        <myContext.Consumer>{
        data=>{return <div>
            <h3>status : {data.status}</h3>
            <p>Count : {data.cnt}</p>
            </div>
            }
        }</myContext.Consumer>

    </div>

   )
}
}


export default Properties;

