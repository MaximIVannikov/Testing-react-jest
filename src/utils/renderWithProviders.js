import { render } from '@testing-library/react';
import { ThemeProvider } from '../providers/themeProvider';

export const renderWithProviders = (
  ui,
  { theme = 'light', ...options } = {},
) => {
  const Wrapper = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return render(ui, { wrapper: Wrapper, ...options });
};
