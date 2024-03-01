import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';

function Router(): ReactElement {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
  );
}

export default Router;