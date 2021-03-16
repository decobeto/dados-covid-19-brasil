import React, {  useState, useCallback } from 'react';
import styled from 'styled-components';
import Select from 'react-select'
import Navbar from './components/navBar';
import api from './services/api';
import './styles/global.css'
import { period, state } from './services/selectOptions';

const Section = styled.section`
  height: 100vh;
  background-color: #F2F3F5;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-itens: center;
  padding-top: 60px;
`

const Selection = styled(Select)`
  width: 20%;
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
`

const Button = styled.input`
  background-color: #d63031;
  border: none;
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1rem;
  width: 85px;
  height: 40px;
  border-radius: 5px;
`

function App() {
  const [data, setData] = useState()
  const [selectedPeriod, setSelectedPeriod] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [isSending, setIsSending] = useState(false)
  
  const sendRequest = useCallback(async () => {
    if (isSending) return
    setIsSending(true)
    const request = await api.get(`/api/v3/agregados/1613/periodos/${selectedPeriod.value}/variaveis/2313%7C1002313%7C216%7C1000216%7C214%7C112%7C215%7C1000215?localidades=N3[${selectedState.value}]&classificacao=82[all]`)
    setData(request.data)
    setIsSending(false)
  }, [isSending, selectedPeriod, selectedState])

  console.log(data)
  console.log(selectedState.value)
  console.log(selectedPeriod.value)

  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <Selection options={period} value={selectedPeriod} onChange={setSelectedPeriod} placeholder={"Período"} />
          <Selection options={state} value={selectedState} onChange={setSelectedState} placeholder={"Estado"} />
          <Button value='Buscar' type={"button"} disabled={isSending} onClick={sendRequest} />
        </Container>
      </Section>
    </>
  );
}

export default App;
