import React from 'react';
import { Counter } from './features/counter/Counter';
import styled from 'styled-components';
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <Container className="App">

      <Header />
      <Home />
    </Container>
  );
}

export default App;


const Container = styled.div`

`
