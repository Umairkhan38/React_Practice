import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component{

    render(){
        return (
            <div>
            <nav>
             <ul>
                <li>
                    <Link to='/' style={{ textDecoration: 'none', color:"whitesmoke" }} >Home</Link>
                </li>
                <li>
                    <Link to='/Product'  style={{ textDecoration: 'none',color:"whitesmoke"  }} >Products</Link>
                </li>
                <li>
                    <Link to='/Form' style={{ textDecoration: 'none',color:"whitesmoke" }} >Contact</Link>
                </li>
                <li>
                    <Link to='/List' style={{ textDecoration: 'none',color:"whitesmoke"  }} >Lists</Link>
                </li>
                <li>
                    <Link to='/StateHandle' style={{ textDecoration: 'none',color:"whitesmoke"  }} >State Handling</Link>
                </li>
                <li>
                    <Link to='/lifeCycle' style={{ textDecoration: 'none',color:"whitesmoke"  }} >Life Cycle</Link>
                </li>
             </ul>   
            </nav>

                 <h1>This is Home Page</h1>

            </div>
        )
    }

}


export default Navbar;


 