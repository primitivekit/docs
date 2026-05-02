import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Introduction from './pages/Introduction';
import Installation from './pages/Installation';
import Customization from './pages/Customization';
import Accessibility from './pages/Accessibility';
import DesignTokens from './pages/DesignTokens';
import ButtonComponent from './pages/ButtonComponent';
import GenericComponent from './pages/GenericComponent';
import NotFound from './pages/NotFound';
import { components } from './config/components';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter 
      basename="/docs"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
          <Route path="customization" element={<Customization />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="design-tokens" element={<DesignTokens />} />
          
          {/* Button has custom page */}
          <Route path="components/button" element={<ButtonComponent />} />
          
          {/* All other components use generic template */}
          {components
            .filter(c => c.id !== 'button')
            .map(component => (
              <Route
                key={component.id}
                path={component.path}
                element={<GenericComponent componentId={component.id} />}
              />
            ))}
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
