import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Introduction from './pages/Introduction';
import Installation from './pages/Installation';
import Customization from './pages/Customization';
import Accessibility from './pages/Accessibility';
import ButtonComponent from './pages/ButtonComponent';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter basename="/docs">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
          <Route path="customization" element={<Customization />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="components/button" element={<ButtonComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
