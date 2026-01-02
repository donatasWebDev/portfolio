import React from 'react';
import { Portfolio } from './pages/Portfolio';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CaseStudy  from './pages/CaseStudy';
export function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/case-study" element={<CaseStudy />} />
    </Routes>
  </BrowserRouter>;
}