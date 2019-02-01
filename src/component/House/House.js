import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin: 20px;
    background-color: #DEDEDE; 
    height: 200px;
    display: block;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// const Content = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     align-items: baseline
// `

const CardImageWrapper = styled.div`
    height: 220px;
    overflow: hidden;
`

export default function House(props){
    const {id, deleteHouseFn} = props;
    return(
        <Card>
            <ContentWrapper>
                {/* <img src={props.image_url} alt='house'/> */}
                <CardImageWrapper>
                    <img src={props.image_url} alt='house' style={{height: '180px'}}/>
                </CardImageWrapper>
                <ContentWrapper>
                    {props.name}
                    {props.address}
                    {props.city}
                    {props.state}
                    {props.zipcode}   
                </ContentWrapper>
                <ContentWrapper>
                    {props.monthly_mortgage}
                    {props.desired_rent}
                </ContentWrapper>
                <img src={'/graphics/delete-button.png'} alt='delete' style={{alignSelf: 'baseline', padding: '5px', cursor: 'pointer'}} onClick={() => deleteHouseFn(id)}/>
            </ContentWrapper>
        </Card>
    )
}