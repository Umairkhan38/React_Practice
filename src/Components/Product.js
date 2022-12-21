import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'

export const Product=(props)=>{

    const[qty,setQty]=useState(1)
    const[price,setPrice]=useState(props.price)
    const[random,setRandom]=useState([])

   const increaseQty=()=>{
    // console.log(qty)
    setPrice(props.price*qty)
        setQty(qty+1)
    }


   const decreaseQty=()=>{
    // console.log(qty)
    setPrice(props.price*qty)
        setQty(qty-1)
    }


    const generateRandom=()=>{

        setRandom([...random,{      
            value:Math.floor(Math.random() *10)    //inserting the random numbers into an array
        }])    

    }
    

    useEffect(() => {
        console.log("useEffect Executed !")
        
    }, [qty,price])
    



    return(
        <div>
        <Navbar />
        <div style={{border:"2px solid #091830",width:"250px",margin:"5px auto",borderRadius:"12px",padding:"15px"}} >
        <h2>{props.pdname}</h2>
        <h3>Description: {props.desc}</h3>
        <span>Price: ₹{price}</span><span>qty {qty}</span>
        <button onClick={()=>increaseQty()}>Increment ++ </button><br />
        <button onClick={()=>decreaseQty()}>Deccrement -- </button>
    </div>
        <button style={{marginLeft:"600px"}} onClick={()=>generateRandom()}>Generate Random</button>
        {
            random.map((elem)=>{
                return <li key={elem.value}>{elem.value}</li>
            })
        }

    </div>

    )
}


