import React from 'react';
import styled from 'styled-components';
import Cards from './cards';

const Container = styled.div``


export default function ChartsAndData(info){

  console.log(info.data)

  return(
    <Container>
      {info.data.map(stateInfo => <Cards stateInfo={stateInfo} key={stateInfo.id} />)}
      
    </Container>
  )
}
