import React from 'react';
import Routes from './routes';
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
