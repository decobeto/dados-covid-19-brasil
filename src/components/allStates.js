import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cards from './cards';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`

const Loading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 2rem;
`

const ChartContainer = styled.div`
  padding-top: 10px;
`

export default function AllStates(){
  const [information, setInformation] = useState()
  let deathCountArray = []
  let casesCountArray = []
  let suspectsCountArray = []
  let refusesCountArray = []

  useEffect( async () => {
    const request = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
    setInformation(request.data)
  }, [setInformation])

  if (information === undefined){
    return <Loading>Carrengando dados...</Loading>
  } else {
    information.data.map((info) => deathCountArray.push({name: info.state, Óbitos: parseInt(info.deaths)}))
    information.data.map((info) => casesCountArray.push({name: info.state, Confirmados: parseInt(info.cases)}))
    information.data.map((info) => suspectsCountArray.push({name: info.state, Suspeitos: parseInt(info.suspects)}))
    information.data.map((info) => refusesCountArray.push({name: info.state, Negativos: parseInt(info.refuses)}))
  }

  return(
    <>
      <Container>
      <ChartContainer />
      <ResponsiveContainer width="50%" height="60%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={deathCountArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} 
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Óbitos" fill="#e84393" />
        </BarChart>
      </ResponsiveContainer>
      <ChartContainer />
      <ResponsiveContainer width="50%" height="60%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={casesCountArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} 
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Confirmados" fill="#e84393" />
        </BarChart>
      </ResponsiveContainer>
      <ChartContainer />
      <ResponsiveContainer width="50%" height="60%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={suspectsCountArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} 
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Suspeitos" fill="#e84393" />
        </BarChart>
      </ResponsiveContainer>
      <ChartContainer />
      <ResponsiveContainer width="50%" height="60%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={refusesCountArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} 
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Negativos" fill="#e84393" />
        </BarChart>
      </ResponsiveContainer>
      {information === undefined ? "" : (
          information.data.map((info) => <Cards statesData={info} key={info.uid} />)
      )}
      </Container>
    </>
  )
}
