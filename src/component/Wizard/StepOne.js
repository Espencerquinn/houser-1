import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateStateName, updateZip } from './../../ducks/reducer';

class StepOne extends Component{

    render(){
        const { updateName, updateAddress, updateCity, updateStateName, updateZip, name, address, city, stateName, zipcode } = this.props;
        return(
            <div>
                Property Name
                <input onChange={(e) => updateName(e.target.value)} value={name} />
                Address
                <input onChange={(e) => updateAddress(e.target.value)} value={address} />
                <div>
                    City
                    <input onChange={(e) => updateCity(e.target.value)} value={city} />
                    State
                    <input onChange={(e) => updateStateName(e.target.value)} value={stateName} />
                    Zip
                    <input onChange={(e) => updateZip(e.target.value)} value={zipcode} />
                </div>
                <Link to='/wizard/steptwo'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { name, address, city, stateName, zipcode } = state;
    return {
        name,
        address,
        city,
        stateName,
        zipcode
    };
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateStateName, updateZip })(StepOne)