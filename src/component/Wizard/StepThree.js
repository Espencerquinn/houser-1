import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateDesRent } from './../../ducks/reducer';
import axios from 'axios';


class StepThree extends Component{

    handleCreate(obj){
        axios.post('/api/house', obj)
        .then((res) => {console.log('added new property')})
    }
   
    render(){
        const { name, address, city, stateName, zipcode, image_url, monthly_mortgage, desired_rent, updateDesRent, updateMortgage} = this.props
        const recRent = Math.round(monthly_mortgage * 1.25);
        const addObj = {
            name: name,
            address: address,
            city: city,
            stateName: stateName,
            zipcode: zipcode,
            image_url: image_url,
            monthly_mortgage: monthly_mortgage,
            desired_rent: desired_rent
        }
        return(
            <div>
                <h2>{`Recommended Rent: $${recRent}`}</h2>
                Monthly Mortgage Amount
                <input onChange={(e) => updateMortgage(e.target.value)} value={monthly_mortgage} />
                Desired Monthly Rent
                <input onChange={(e) => updateDesRent(e.target.value)} value={desired_rent} />
                <div>
                    <Link to='/wizard/steptwo'><button>Previous Step</button></Link>
                    <Link to='/'><button onClick={() => this.handleCreate(addObj)}>Complete</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { name, address, city, stateName, zipcode, image_url, monthly_mortgage, desired_rent } = state;
    return {
        name,
        address,
        city,
        stateName,
        zipcode,
        image_url,
        monthly_mortgage,
        desired_rent
    }
}

export default connect(mapStateToProps, { updateMortgage, updateDesRent })(StepThree)