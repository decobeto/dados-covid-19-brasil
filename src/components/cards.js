import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 500px;
  width: 800px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
  -moz-box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
  box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
`

const Header = styled.div`
  padding-top: 20px;
  padding-left: 20px;
`

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 2rem;
`

const SubTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.75rem;
  padding-top: 3px;
`

const Info = styled.div`
  padding-top: 120px;
  padding-left: 20px;
`

const Numbers = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.75rem;
  padding-top: 3px;
`

export default function Cards(data){

  console.log(data.statesData)

  return(
    <Container>
      <Header>
        <Title>{data.statesData.state}</Title>  
        <SubTitle>Ultima atualização: {new Intl.DateTimeFormat('pt-br').format(Date.parse(data.statesData.datetime))}</SubTitle>
      </Header>
      <Info>
        <Numbers>Casos Confirmados: {data.statesData.cases}</Numbers>
        <Numbers>Casos Suspeitos: {data.statesData.suspects}</Numbers>
        <Numbers>Negativos: {data.statesData.refuses}</Numbers>
        <Numbers>Óbitos: {data.statesData.deaths}</Numbers>
      </Info>
    </Container>
  )
}
