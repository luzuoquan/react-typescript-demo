import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const LazyHome = lazy(() => import('@/containers/home'));

export default (): JSX.Element => (
  <BrowserRouter basename="typescript">
    <Suspense fallback={null}>
    <Switch>
      <Route exact path='/index' component={LazyHome} />
    </Switch>
    </Suspense>
  </BrowserRouter>
)