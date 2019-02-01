import React from 'react';
import { Link } from 'react-router-dom';

export default function StepOne(){
    return(
        <div>
            Property Name
            <input />
            Address
            <input />
            <div>
                City
                <input />
                State
                <input />
                Zip
                <input />
            </div>
            <Link to='/wizard/steptwo'><button>Next Step</button></Link>
        </div>
    )
}