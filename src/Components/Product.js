import React from 'react';
import Navbar from './Navbar'

export const Product=(props)=>{

    return(
        <div>
        <Navbar />
        <div style={{border:"2px solid #091830",width:"250px",marginLeft:"5px",borderRadius:"12px",padding:"15px"}} >
        <h2>{props.pdname}</h2>
        <h3>Description: {props.desc}</h3>
        <h4>Price: ₹{props.price}</h4>
    </div>
    </div>

    )
}


