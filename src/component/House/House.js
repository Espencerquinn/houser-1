import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin: 20px;
    background-color: #DEDEDE; 
    height: 180px;
    display: flex;
    padding: 10px;
    align-items: center;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;

`

// const Content = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     align-items: baseline
// `

const CardImageWrapper = styled.div`
    height: 180px;
    width: 40%;
    overflow: hidden;
`

const TextCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0px;
    margin-left: 10px;
`

export default function House(props){
    const {id, deleteHouseFn} = props;
    return(
        <Card>
            <CardImageWrapper>
                <img src={props.image_url} alt='house' style={{height: '180px'}}/>
            </CardImageWrapper>
            <ContentWrapper>
                <TextCont>{props.name}</TextCont>
                <TextCont>{props.address}</TextCont>
                <TextCont>{props.city}</TextCont>
                <TextCont>{props.state}</TextCont>
                <TextCont>{props.zipcode}</TextCont>   
            </ContentWrapper>
            <ContentWrapper>
                <TextCont>Monthly Mortgage: {props.monthly_mortgage}</TextCont>
                <TextCont>Desired Rent: {props.desired_rent}</TextCont>
            </ContentWrapper>
            <img src={'/graphics/delete-button.png'} alt='delete' style={{alignSelf: 'baseline', padding: '5px', cursor: 'pointer'}} onClick={() => deleteHouseFn(id)}/>
        </Card>
    )
}