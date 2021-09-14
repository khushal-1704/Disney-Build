import React from 'react';
// import { Counter } from './features/counter/Counter';
import styled from 'styled-components';
import Header from './components/Header'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login'

function App() {
  return (
    <Container className="App">

      <Router>
        <Header />
        <Switch >
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;


const Container = styled.div`

`
