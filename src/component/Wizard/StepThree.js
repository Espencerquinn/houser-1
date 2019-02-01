import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateDesRent } from './../../ducks/reducer';


class StepThree extends Component{
   
    render(){
        const { monthly_mortgage, updateMortgage, updateDesRent, desired_rent} = this.props
        const recRent = monthly_mortgage * 1.25;
        return(
            <div>
                <h2>{`Recommended Rent: $${recRent}`}</h2>
                Monthly Mortgage Amount
                <input onChange={(e) => updateMortgage(e.target.value)} value={monthly_mortgage} />
                Desired Monthly Rent
                <input onChange={(e) => updateDesRent(e.target.value)} value={desired_rent} />
                <div>
                    <Link to='/wizard/steptwo'><button>Previous Step</button></Link>
                    <Link to='/'><button>Complete</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { monthly_mortgage, desired_rent } = state;
    return {
        monthly_mortgage,
        desired_rent
    }
}

export default connect(mapStateToProps, { updateMortgage, updateDesRent })(StepThree)