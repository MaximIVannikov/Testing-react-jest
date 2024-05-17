import { render, renderHook } from '@testing-library/react';
import { ThemeProvider } from '../providers/themeProvider';

const getWrapper =
  (theme) =>
  ({ children }) => {
    return <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>;
  };

export const renderWithProviders = (
  ui,
  { theme = 'light', ...options } = {},
) => {
  // const Wrapper = ({ children }) => {
  //   return <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>;
  // };
  const Wrapper = getWrapper(theme);

  return render(ui, { wrapper: Wrapper, ...options });
};

export const renderHookWithProviders = (
  hook,
  { theme = 'light', ...options } = {},
) => {
  const Wrapper = getWrapper(theme);

  return renderHook(hook, { wrapper: Wrapper, ...options });
};
