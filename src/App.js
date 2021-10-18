import React from 'react';
// import { Counter } from './features/counter/Counter';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login'
import Body from './components/Body';

function App() {
  return (
    <Container className="App">

      <Router>

        <Switch >
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/home'>
            <Body />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;


const Container = styled.div`

`
