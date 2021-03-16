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

function App() {
  const [data, setData] = useState()
  const [selectedPeriod, setSelectedPeriod] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [isSending, setIsSending] = useState(false)
  
  const sendRequest = useCallback(async (selectedPeriod, selectedState) => {
    if (isSending) return
    setIsSending(true)
    const request = await api.get(`/api/v3/agregados/1613/periodos/${selectedPeriod.value}/variaveis/2313%7C1002313%7C216%7C1000216%7C214%7C112%7C215%7C1000215?localidades=N3[${selectedState.value}]&classificacao=82[all]`)
    setData(request.data)
    setIsSending(false)
  }, [isSending])

  console.log(data)
  console.log(selectedState.value)
  console.log(selectedPeriod.value)

  return (
    <>
      <Section>
        <Navbar />
        <div>
          <Select options={period} value={selectedPeriod} onChange={setSelectedPeriod} />
          <Select options={state} value={selectedState} onChange={setSelectedState} />
          <input value='Aperta eu' type={"button"} disabled={isSending} onClick={sendRequest} />
        </div>
      </Section>
    </>
  );
}

export default App;
