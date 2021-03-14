import React from 'react';
import styled from 'styled-components'
import './styles/global.css'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br",
});

api.get('/api/v3/agregados/1613/periodos/2019/variaveis/2313?localidades=N3[42]&classificacao=82[all]').then( response => console.log(response.data))

function App() {
  return (
    <h1>hello </h1>
  );
}

export default App;
