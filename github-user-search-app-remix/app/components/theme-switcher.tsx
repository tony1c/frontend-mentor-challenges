import { useTheme, Theme } from '~/utils/theme-provider';

export const ThemeSwitcher = () => {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    );
  };

  return <button onClick={toggleTheme}>Toggle</button>;
};
