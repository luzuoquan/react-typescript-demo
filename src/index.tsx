import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './styles/index.css';

render(
  <App />,
  document.querySelector('#app'),
);

function loadScript(url: string) {
  const script: HTMLScriptElement = document.createElement('script');
  script.onload = () => {
    window.eruda && window.eruda.init();
  };
  script.src = url;
  (document.querySelector('body') as HTMLElement).appendChild(script);
}

const cdnEruda = '//cdn.jsdelivr.net/npm/eruda';
loadScript(cdnEruda);
