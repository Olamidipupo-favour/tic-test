import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SchoolPay from './App';

console.log('Rendering App');

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
   <Routes>
          <Route index element={<SchoolPay />} />
      </Routes>
  </BrowserRouter>
); 