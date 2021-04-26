import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Abc from './components/abc/Abc';
import Xyz from './components/xyz/Xyz';
import { Container } from 'react-bootstrap';

const routes = [
  {
    path: '/',
    exact: true,
    main: Home,
  },
  {
    path: '/abc',
    main: Abc,
  },
  {
    path: '/xyz',
    main: Xyz,
  },
];

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
