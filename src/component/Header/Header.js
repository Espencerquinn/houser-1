import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #519872;
    color: #ffffff;
    font-size: 35px;
    font-weight: bolder;
    display: float;
    align-items: center;
    justify-content: center;
`

export default function Header(){
    return(
        <HeaderWrapper>
            <img src={'/graphics/houser-logo.png'} alt='logo'/>
            <p style={{marginLeft: '15px'}}>Houser</p>
        </HeaderWrapper>
    )
}