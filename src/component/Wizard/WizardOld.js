import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateStateName, updateZip, updateImage, updateMortgage, updateDesRent } from './../../ducks/reducer';


class Wizard extends Component{

    handleCancel(){
        const { updateName, updateAddress, updateCity, updateStateName, updateZip, updateImage, updateMortgage, updateDesRent } = this.props;
        updateName('')
        updateAddress('')
        updateCity('')
        updateStateName('')
        updateZip(0)
        updateImage('')
        updateMortgage(0)
        updateDesRent(0)
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button onClick={() => handleCancel()}>Cancel</button></Link>
                </div>
                {props.children}
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
        zipcode,
        image_url,
        monthly_mortgage,
        desired_rent
    };
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateStateName, updateZip, updateImage, updateMortgage, updateDesRent})(Wizard)