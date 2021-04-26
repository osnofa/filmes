import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import { Container } from 'react-bootstrap';

import { rootPath, routes } from '../routes';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={`${rootPath}${route.path}`}
              exact={route.exact}
              children={<route.page />}
            />
          ))}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
