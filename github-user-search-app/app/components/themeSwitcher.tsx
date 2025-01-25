import { useTheme } from '~/context/themeProvider';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={() => toggleTheme()}>Switch</button>;
};
