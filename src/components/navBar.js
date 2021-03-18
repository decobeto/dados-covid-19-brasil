import React from 'react';
import styled from 'styled-components';
import '../styles/global.css'

const Nav = styled.nav`
  flex: 1;
  display: flex;
  background-color: #6c5ce7;
  height: 60px;
  box-shadow: 1px -7px 40px 9px rgba(0,0,0,0.75);
  -webkit-box-shadow: 1px -7px 40px 9px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px -7px 40px 9px rgba(0,0,0,0.75);
`

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
`

const SiteName = styled.li`
  list-style-type: none;
  margin-left: 15px;
  font-weight: 700;
  color: white;
  font-size: 2rem;
  font-family: 'Roboto';
`


export default function Navbar(){
  return(
    <Nav>
      <Container>
        <SiteName>😷 Dados sobre COVID-19</SiteName>
      </Container>
    </Nav>
  )
}