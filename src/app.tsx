import React from 'react';
import { Provider } from 'react-redux';
import Routes from '@/routes';
import store from '@/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store as any}>
      <Routes />
    </Provider>
  );
}
