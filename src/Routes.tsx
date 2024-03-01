import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Initial from './Pages/Initital';

function Router(): ReactElement {
  return (
      <Routes>
        <Route path="/" element={<Initial/>} />
      </Routes>
  );
}

export default Router;