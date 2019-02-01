import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { resetState } from './../../ducks/reducer';


class Wizard extends Component{
    render(){
        const { resetState } = this.props;
        return(
            <div>
                <div>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button onClick={() => resetState()}>Cancel</button></Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        state
    };
}

export default connect(mapStateToProps, {resetState})(Wizard)