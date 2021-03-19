import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cards from './cards';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`

const Loading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 2rem;
`

export default function AllStates(){
  const [information, setInformation] = useState()

  useEffect( async () => {
    const request = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
    setInformation(request.data)
  }, [])

  console.log(information)

  return(
    <Container>
      {information === undefined ? (<Loading>Carrengando dados...</Loading>) : (
        information.data.map((info) => <Cards statesData={info} key={info.uid} />)
      )}
    </Container>
  )
}
