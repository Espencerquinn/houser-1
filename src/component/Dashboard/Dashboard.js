import React, { Component } from 'react';
import House from './../House/House';
import styled from 'styled-components';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddButton = styled.button`
    border: none;
    background: none;
    background-color: #8AEA92;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 20px;
    cursor: pointer;
`

const DashWrapper = styled.div`
    margin: 0 auto;
    width: 50%;
    background-color: #E5F4EC;
`

const DashHeader = styled.div`
    margin: 0;
    padding 10px;
    width: 100%:
    display: flex;
    justify-content: space-between;
`

export default class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            houseList: []
        }

        this.deleteHouse = this.deleteHouse.bind(this);
    }
    
    componentDidMount(){
        const rent = this.props.match.params.rent || ''
        axios.get(`/api/houses/${rent}`)
            .then((res) => {
                this.setState({
                    houseList: res.data
                })
            })
    }

    deleteHouse(id){
        axios.delete(`/api/house/${id}`)
        .then((res) => {
            this.setState({
                houseList: res.data
            })
        })
    }

    render(){
        return(
            <DashWrapper>
                <DashHeader>
                    <h1>Dashboard</h1>
                    <Link to='/wizard/stepone'><AddButton>Add New Property</AddButton></Link>
                </DashHeader>
                <h3>Home Listings</h3>
                {
                    this.state.houseList.map( house => (
                        <House 
                            key={house.house_id}
                            id={house.house_id}
                            name={house.name}
                            address={house.address}
                            city={house.city}
                            state={house.state}
                            zipcode={house.zipcode}
                            image_url={house.image_url}
                            monthly_mortgage={house.monthly_mortgage}
                            desired_rent={house.desired_rent}
                            deleteHouseFn={this.deleteHouse}
                        />
                    ))
                }
            </DashWrapper>
        )
    }
}