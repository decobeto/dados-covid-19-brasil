import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/navBar';
import api from './services/api';
import './styles/global.css'

const Section = styled.section`
  height: 100vh;
  background-color: #F2F3F5;
`

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    async function fetchData(){
      
      const request = await api.get('/api/v3/agregados/1613/periodos/2019/variaveis/2313%7C1002313%7C216%7C1000216%7C214%7C112%7C215%7C1000215?localidades=N3[42]&classificacao=82[all]')
      setData(request.data)
      return request
    }
    fetchData()
  }, []) 

  console.log(data)

  return (
    <>
      <Section>
        <Navbar />
      </Section>
    </>
  );
}

export default App;
