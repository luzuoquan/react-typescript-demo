import React, { ReactElement, Profiler } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from '@/containers/home';

interface IprofilerParams {
  id: string;
  phase: string;
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
  interactions: any;
}

export default function App(): ReactElement {
  const onRender: (...params: any) => void = (
    ...params
  ) => {
    console.log(
      params,
    );
  };

  return (
    <Profiler id="router" onRender={onRender}>
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </Profiler>
  );
}
