import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Initial from './Pages/Initital';
import Login from './Pages/Login';
import Register from './Pages/Register';

function Router(): ReactElement {
  return (
      <Routes>
        <Route path="/" element={<Initial/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastrar" element={<Register/>} />
      </Routes>
  );
}

export default Router;