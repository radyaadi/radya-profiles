import React, { useEffect, useState, useMemo } from 'react';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import { ThemeProvider } from './contexts/ThemeContext';
import { routes } from './utils/routes';

const App = () => {
  const [offset, setOffset] = useState(0);

  const [theme, changeTheme] = useTheme();

  const themeContextValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  useEffect(() => {
    if (localStorage.theme) {
      changeTheme(localStorage.theme);
    } else {
      localStorage.setItem('theme', 'dark');
      changeTheme('dark');
    }

    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider value={themeContextValue}>
      <header
        className={`${
          offset >= 40
            ? 'h-[3.5rem] border-b border-[--border-color] bg-[--container-color]'
            : 'h-[5rem]'
        } fixed left-0 top-0 z-[100] w-full duration-300`}
      >
        <Navigation />
      </header>
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </main>
      <footer></footer>
    </ThemeProvider>
  );
};

export default App;
