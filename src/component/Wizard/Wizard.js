import React from 'react';
import { Link } from 'react-router-dom'

export default function Wizard(props){
    return(
        <div>
            <div>
                <h1>Add New Listing</h1>
                <Link to='/'><button>Cancel</button></Link>
            </div>
            {props.children}
        </div>
    )
}