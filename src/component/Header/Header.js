import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #519872;
    color: #ffffff;
    font-size: 30px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 83px;
`

export default function Header(){
    return(
        <HeaderWrapper>
            <img src={'/graphics/houser-logo.png'} alt='logo' style={{height: '32px'}} />
            <p style={{marginLeft: '15px'}}>Houser</p>
        </HeaderWrapper>
    )
}