import cn from 'clsx';

import { useTheme } from '../../providers/useTheme';

import styles from './ToggleTheme.module.css';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={cn(styles.toggle, theme === 'dark' && styles.dark)}
      onClick={toggleTheme}
      data-testid="toggle-theme"
    >
      {theme === 'light' ? 'Dark' : 'Light'} mode
    </button>
  );
};
