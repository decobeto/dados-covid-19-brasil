import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 120px;
  width: 190px;
  margin: 10px 20px;
  border-radius: 8px;
`

const Title = styled.h4`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.85rem;
`

const Numbers = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 2rem;
  padding-top: 10px;
`

const Loading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 2rem;
`


export default function BrazilStatus(){
  const [information, setInformation] = useState()

  useEffect( async () => {
    const request = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
    setInformation(request.data)
  }, [])

  return(
    <Container>
      {information === undefined ? (<Loading>Carrengando dados...</Loading>) : (
      <>
        <Card>
          <Title style={{color: '#636e72'}}>🇧🇷 Casos Confirmados</Title>
          <Numbers style={{color: '#636e72'}}>{information.data.confirmed}</Numbers>
        </Card>
        <Card style={{backgroundColor: '#55efc4'}}>
          <Title style={{color: '#218c74'}}>🇧🇷 Casos Recuperados</Title>
          <Numbers style={{color: '#218c74'}}>{information.data.recovered}</Numbers>
        </Card>
        <Card style={{backgroundColor: '#fdcb6e'}}>
          <Title style={{color: '#cc8e35'}}>🇧🇷 Casos Ativos</Title>
          <Numbers style={{color: '#cc8e35'}}>{information.data.cases}</Numbers>
        </Card>
        <Card style={{backgroundColor: '#636e72'}}>
          <Title style={{color: '#2d3436'}}>🇧🇷 Óbitos</Title>
          <Numbers style={{color: '#2d3436'}}>{information.data.deaths}</Numbers>
        </Card>
      </>
      )}
    </Container>
  )
}
