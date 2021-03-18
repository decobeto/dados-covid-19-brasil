import React, {  useState, useCallback } from 'react';
import styled from 'styled-components';
import Select from 'react-select'
import Navbar from './components/navBar';
import api from './services/api';
import './styles/global.css'
import { state } from './services/selectOptions';
import ChartsAndData from './components/chartsAndData';
import BrazilStatus from './components/brazilStatus';

const Section = styled.section`
  height: 100vh;
  background-color: #F2F3F5;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [selectedState, setSelectedState] = useState('')
  const [isSending, setIsSending] = useState(false)
  
  const sendRequest = useCallback(async () => {
    if (isSending) return
    setIsSending(true)
    const request = await api.get(`/v1/brazil/uf/${selectedState.value}`)
    setData(request.data)
    setIsSending(false)
  }, [isSending, selectedState])

  console.log(data)

  return (
    <>
      <Section>
        <Navbar />
        <BrazilStatus />
        <Container>
          <Selection options={state} value={selectedState} onChange={setSelectedState} placeholder={"Estado"} />
          <Button value='Buscar' type={"button"} disabled={isSending} onClick={sendRequest} />
        </Container>
        
        {data === undefined ? "" : 
          (<Container>
            <ChartsAndData data={data} />
          </Container>)
        }
      </Section>
    </>
  );
}

export default App;
