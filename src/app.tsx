import React, { ReactElement } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from '@/containers/home';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
