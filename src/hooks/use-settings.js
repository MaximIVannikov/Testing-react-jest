import { useTheme } from '../providers/useTheme';

const useSettings = () => {
  const { theme } = useTheme();

  return {
    showSpecialFeature: theme === 'dark',
  };
};

export { useSettings };
