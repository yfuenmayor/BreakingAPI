import React from 'react';
import styled from '@emotion/styled';

const Boton = styled.button`
  padding: 1rem 3rem;
  font-size: 2rem;
  margin-top: 3rem;
  color: #FFF;
  background-size: 300px;
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
`;

function App() {
  return (
    <Boton>Obtener Frase</Boton>
  );
}

export default App;
