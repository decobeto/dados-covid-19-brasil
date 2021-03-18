import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 700px;
  width: 700px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
  -moz-box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
  box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
`

const Title = styled.h1`
  font-family: 'Roboto';
  font-weigth: 700;
  font-size: 2rem;
  padding-top: 10px;
`

const SubTitle = styled.h1`
  font-family: 'Roboto';
  font-weigth: 700;
  font-size: 1rem;
  padding-top: 3px;
`

const Line = styled.hr`
  width: 80%;
  margin-top: 10px;
`

const Info = styled.div``

export default function Cards(){

  return(
    <Container>
        <>
          <Title>{}</Title>  
          <Line />
          <SubTitle>{}</SubTitle>
          <Info>
            {}
          </Info>
        </>
    </Container>
  )
}
