import React from 'react';
import styled from 'styled-components';
import PieChartResemblance from './pieChart';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 450px;
  width: 900px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
  -moz-box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
  box-shadow: 0px 25px 45px -20px rgba(0,0,0,0.68);
`

const Header = styled.div`
  padding-top: 20px;
  padding-left: 30px;
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
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Numbers = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.75rem;
  padding-top: 3px;
`

const Cluster = styled.div`
  display: flex;
  flex-direction: column;
`
const ChartCluster = styled.div`
  display: flex;
`


export default function Cards(data){

  const chartData = [
    { name: "Confirmados", value: parseInt(data.statesData.cases) },
    { name: "Suspeitos", value: parseInt(data.statesData.suspects) },
    { name: "Negativos", value: parseInt(data.statesData.refuses) },
    { name: "Óbitos", value: parseInt(data.statesData.deaths) }
  ]

  return(
    <Container>
      <Header>
        <Title>{data.statesData.state}</Title>  
        <SubTitle>Ultima atualização: {new Intl.DateTimeFormat('pt-br').format(Date.parse(data.statesData.datetime))}</SubTitle>
      </Header>
      <Info>
        <Cluster>
          <Numbers>Casos Confirmados: {data.statesData.cases}</Numbers>
          <Numbers>Casos Suspeitos: {data.statesData.suspects}</Numbers>
          <Numbers>Negativos: {data.statesData.refuses}</Numbers>
          <Numbers>Óbitos: {data.statesData.deaths}</Numbers>
        </Cluster>
        <ChartCluster>
          <PieChartResemblance data={chartData} />
        </ChartCluster>
      </Info>
    </Container>
  )
}
