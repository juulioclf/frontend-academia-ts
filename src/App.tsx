import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}