import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Abc from './components/abc/Abc';
import Xyz from './components/xyz/Xyz';

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
    </Router>
  );
}

export default App;
