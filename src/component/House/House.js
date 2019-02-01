import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin: 15px;
    background-color: #DEDEDE; 
    height: 250px;
    display: block;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline
`

const CardImageWrapper = styled.img`
    height: 220px;
    overflow: hidden;
`

export default function House(props){
    const {id, name, address, city, state, zipcode, image_url, monthly_mortgage, desired_rent, deleteHouseFn} = props;
    return(
        <Card>
            <ContentWrapper>
                <CardImageWrapper>
                    <img src={image_url} alt='house'/>
                </CardImageWrapper>
                <ContentWrapper>
                    {name}
                    {address}
                    {city}
                    {state}
                    {zipcode}   
                </ContentWrapper>
                <ContentWrapper>
                    {monthly_mortgage}
                    {desired_rent}
                </ContentWrapper>
                <img src={'/graphics/delete-button.png'} alt='delete' style={{alignSelf: 'baseline'}} onClick={() => deleteHouseFn(id)}/>
            </ContentWrapper>
        </Card>
    )
}