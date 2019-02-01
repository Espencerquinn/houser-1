import React from 'react';
import { Link } from 'react-router-dom';

export default function StepTwo(){
    return(
        <div>
            Image URL
            <input />
            <div>
                <Link to='/wizard/stepone'><button>Previous Step</button></Link>
                <Link to='/wizard/stepthree'><button>Next Step</button></Link>
            </div>
        </div>
    )
}