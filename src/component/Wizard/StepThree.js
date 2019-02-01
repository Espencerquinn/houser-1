import React from 'react';
import { Link } from 'react-router-dom';

export default function StepOne(){
    
    return(
        <div>
            Recommended Rent: $0
            Monthly Mortgage Amount
            <input />
            Desired Monthly Rent
            <input />
            <div>
                <Link to='/wizard/steptwo'><button>Previous Step</button></Link>
                <Link to='/'><button>Complete</button></Link>
            </div>
        </div>
    )
}