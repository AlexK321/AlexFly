import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { appTheme } from '../theme';

import { MainPage } from './MainPage';

export const AppRoutes = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');

  const renderLayout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? appTheme.dark : appTheme.light}>
      <BrowserRouter>
        <Routes>
          <Route element={renderLayout()}>
            <Route path="/" element={<MainPage />} />
          </Route>
          <Route path="*" element={<> Error page</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
