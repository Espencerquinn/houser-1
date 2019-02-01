import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from './../../ducks/reducer';

class StepTwo extends Component{
    render(){
        const { updateImage } = this.props;
        return(
            <div>
                Image URL
                <input onChange={(e) => updateImage(e.target.value)}/>
                <div>
                    <Link to='/wizard/stepone'><button>Previous Step</button></Link>
                    <Link to='/wizard/stepthree'><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {image_url} = state;
    return {
        image_url
    };
}

export default connect(mapStateToProps, { updateImage })(StepTwo)