import React, { useEffect, useState } from 'react';
import api from './services/api';
import './styles/global.css'

function App() {
  const [information, setInformation] = useState()
  useEffect(() => {
    api.get('/api/v3/agregados/1613/periodos/2019/variaveis/2313?localidades=N3[42]&classificacao=82[all]').then( response => setInformation(response.data))
  }, [setInformation]) 

  return (
    <>
    
    {/* {information.map(info => info.id)} */}
    </>
  );
}

export default App;
