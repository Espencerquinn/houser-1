import React, { Component } from 'react';
import House from './../House/House';
import styled from 'styled-components';
// import axios from 'axios';
import { Link } from 'react-router-dom';

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
`

const DashWrapper = styled.div`
    margin: 0 auto;
    width: 50%;
    background-color: #E5F4EC;
`

const DashHeader = styled.div`
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
                    this.state.houseList.map( house => {
                        <House 
                        
                        />
                    })
                }
            </DashWrapper>
        )
    }
}